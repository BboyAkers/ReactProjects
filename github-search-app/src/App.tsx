import './App.css'
import CompanyIcon from './assets/icon-company.svg?react';
import LocationIcon from './assets/icon-location.svg?react';
import MoonIcon from './assets/icon-moon.svg?react';
import SearchIcon from './assets/icon-search.svg?react';
import SunIcon from './assets/icon-sun.svg?react';
import TwitterIcon from './assets/icon-twitter.svg?react';
import WebsiteIcon from './assets/icon-website.svg?react';

function App() {

  return (
    <main className="bg-slate-500 h-screen p-6">
      <header>
        <h1>devfinder</h1>
      </header>
      <section>
        <form className="max-w-3xl flex justify-between bg-white h-14 rounded-2xl p-2">
          <input placeholder="Search Github username..." type="search" className="w-full" />
          <button className="bg-blue-500 px-3 rounded-xl text-white">Search</button>
        </form>

        <div className="max-w-3xl bg-white h-[500px] rounded-2xl mt-8 p-8">
          <div className="grid grid-cols-8">
            <img className="col-span-3 rounded-full inline" src="https://placehold.co/100x100" alt="Github profile picture" />
            <div className="ml-4 col-span-5 inline-block">
              <h2 className="font-semibold">The Octocat</h2>
              <a href="#" className="text-blue-500">@octocat</a>
              <p className="text-sm">Joined 25 Jan 2011</p>
            </div>
          </div>
            <p className="inline-block mt-8 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
            <div className="grid grid-cols-3 text-center p-4 bg-slate-300 rounded-xl mt-6">
              <div>
                <p className="text-sm">Repos</p>
                <p className="font-bold">8</p>
              </div>
              <div>
                <p className="text-sm">Followers</p>
                <p className="font-bold">3938</p>
              </div>
              <div>
                <p className="text-sm">Following</p>
                <p className="font-bold">9</p>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <p><LocationIcon className="inline-block mr-5" />San Francisco</p>
              <p><WebsiteIcon className="inline-block mr-4" />https://github.blog</p>
              <p><TwitterIcon className="inline-block mr-4" />Not Available</p>
              <p><CompanyIcon className="inline-block mr-4" />@github</p>
            </div>
        </div>
      </section>
    </main>
  )
}

export default App
