import { useEffect, useState, useMemo } from 'react';
import './App.css'
import CompanyIcon from './assets/icon-company.svg?react';
import LocationIcon from './assets/icon-location.svg?react';
// import MoonIcon from './assets/icon-moon.svg?react';
import SearchIcon from './assets/icon-search.svg?react';
// import SunIcon from './assets/icon-sun.svg?react';
import TwitterIcon from './assets/icon-twitter.svg?react';
import WebsiteIcon from './assets/icon-website.svg?react';

interface GithubSearchFormProps {
  initialUsername: string,
  onSubmit: (newUsername: string) => void
}

interface GithubUserCardState {
    status?: string | null,
    githubUser?: object | null,
    error?: string | null,
}

const fetchGithubUser = (name: string) => {

  return window
    .fetch(`https://api.github.com/users/${name}`)
    .then(async response => {
      const data = await response.json()
      if(response.ok && data.login) {
          return data;
      }
      return Promise.reject('User not found');
    })
}

const GithubSearchForm = ({initialUsername, onSubmit}: GithubSearchFormProps) => {

  const [username, setUsername] = useState(initialUsername)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username);
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-3xl flex justify-between bg-white h-14 rounded-2xl p-2 w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon />
      </div>
      <input 
        type="search"
        placeholder="Search Github username..."
        value={username}
        onChange={handleChange}
        className="w-full text-sm pl-8" />
      <button className="bg-blue-500 px-3 rounded-xl text-white" disabled={!username.length}>Search</button>
    </form>
  )
}

const GithubUserCardDetails = ({githubUser}) => {
  const { name, login, avatar_url, html_url, created_at, bio, followers, following, public_repos, location, twitter_username, blog, company } = githubUser;
  return (
    <div className="max-w-3xl bg-white max-h-[600px] rounded-2xl mt-8 p-8">
      <div className="grid grid-cols-8 md:grid-cols-12">
        <img className="col-span-3 md:col-span-3 rounded-full inline max-h-[150px]" src={avatar_url} alt="Github profile picture" />
        <div className="col-span-5 md:col-span-9 ml-4 inline-block flex-col flex justify-center">
          <h2 className="font-semibold md:text-2xl">{name}</h2>
          <a href={html_url} target="_blank" className="text-blue-500">@{login}</a>
          <p className="text-sm">{created_at}</p>
        </div>
      </div>
      <p className="inline-block mt-8 text-sm">{bio}</p>
      <div className="grid grid-cols-3 text-center p-4 bg-slate-300 rounded-xl my-6">
        <div>
          <p className="text-sm">Repos</p>
          <p className="font-bold">{public_repos}</p>
        </div>
        <div>
          <p className="text-sm">Followers</p>
          <p className="font-bold">{followers}</p>
        </div>
        <div>
          <p className="text-sm">Following</p>
          <p className="font-bold">{following}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="mt-3"><LocationIcon className="inline-block mr-5" />{location ? location : 'Not Available'}</p>
        <a href={blog} target="_blank" className="mt-3"><WebsiteIcon className="inline-block mr-4" />{blog ? blog : 'Not Available'}</a>
        <p className="mt-3"><TwitterIcon className="inline-block mr-4" />{twitter_username ? twitter_username : 'Not Available'}</p>
        <p className="mt-3"><CompanyIcon className="inline-block mr-4" />{company ? company : 'Not Available'}</p>
      </div>
    </div>
  )
}


const GithubUserCard = ({ username }) => {
  const [state, setState] = useState<GithubUserCardState>({
    status: 'idle',
    githubUser: null,
    error: null,
  });

  const { status, githubUser, error } = state;

  useEffect(() => {
    if (!username) {
      return
    }
    setState({ status: 'pending' })
    fetchGithubUser(username)
    .then(
      githubUser => {
        setState({ status: 'resolved', githubUser })
      },
      error => {
        setState({ status: 'rejected', error })
      },
    )
  }, [username])

  if(status == 'idle') {
    return (
      <div className="max-w-3xl bg-white h-[500px] rounded-2xl mt-8 p-8 flex">
        <h2 className='mt-10 text-center text-xl'>Submit a github username</h2>
      </div>
    )
  } else if( status === 'pending') {
    return (
      <div className="max-w-3xl bg-white h-[500px] rounded-2xl mt-8 p-8">
        <h2 className='mt-10 text-center text-xl'>Loading...</h2>
      </div>
    )
  } else if( status === 'rejected') {
    return (
      <div className="max-w-3xl bg-white h-[500px] rounded-2xl mt-8 p-8">
        <h2 className='mt-10 text-center text-xl'>{error}</h2>
      </div>
    )
  } else if( status === 'resolved') {
    return (
      <GithubUserCardDetails githubUser={githubUser} />
    )
  }
}

const RepoList = () => {
  //fetch list of repos
  //display list of repos
  const [state, setState] = useState({
    status: 'pending',
    error: null,
  });

  const [repos, setRepos] = useState([]);
  const [filterType, setFilterType] = useState('');
  const filteredData = useMemo(
    () => repos.filter((repo) => repo.language === filterType),
    [repos, filterType]
  );

  const { status, error } = state;
  const url = 'https://api.github.com/users/BboyAkers/repos';
  const fetchRepos = async () => {
    const response = await window.fetch(url);
    const data = await response.json();
    if (response.ok) {
      setState({ status: 'resolved' });
      setRepos(data);
    } else {
      setState({ status: 'rejected', error: data.message });
    }
  };

  useEffect(() => {
    setState({ status: 'pending' });
    fetchRepos();
  }, []);

  //useMemo to filter repos by language
  const handleFilter = (language: string) => {
    setState({ status: 'pending' });
    setFilterType(language);
    console.log(language);
    setState({ status: 'resolved' });
  };

  if (status === 'pending') {
    return (
      <div className="max-w-3xl bg-white h-[500px] rounded-2xl mt-8 p-8">
        <h2 className="mt-10 text-center text-xl">Loading...</h2>
      </div>
    );
  } else if (status === 'resolved') {
    return (
      <div className="max-w-3xl bg-white rounded-2xl mt-8 p-8">
        <h2 className="mt-10 text-center text-xl">Repo List</h2>
        <button
          className="bg-blue-500 px-3 rounded-xl text-white"
          onClick={() => handleFilter('JavaScript')}
        >
          JavaScript
        </button>
        <button
          className="bg-blue-500 px-3 rounded-xl text-white"
          onClick={() => handleFilter('HTML')}
        >
          HTML
        </button>
        <ul>
          {filteredData.map((repo) => (
            <li key={repo.id}>
              {repo.name} {repo.language}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

function App() {
const [username, setUsername] = useState('');

const handleSubmit = (newUsername: string) => {
  setUsername(newUsername);
}

  return (
    <main className="bg-slate-500 h-full p-6 flex items-center justify-center">
      <div className="w-[40rem]">
        <header>
          <h1 className="font-semibold md:text-2xl mb-4">devfinder</h1>
          <GithubSearchForm initialUsername={username} onSubmit={handleSubmit} />
        </header>
        <section>
          <GithubUserCard username={username} />
        </section>
        <section>
          <RepoList />
        </section>
      </div>
    </main>
  )
}

export default App
