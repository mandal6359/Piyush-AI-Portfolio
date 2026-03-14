"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubStats() {
  return (
    <section className="bg-black text-white py-20 text-center">
      
      <h2 className="text-4xl text-cyan-400 mb-10">
        GitHub Activity
      </h2>

      <div className="flex justify-center">
        <GitHubCalendar username="mandal6359" />
      </div>

    </section>
  );
}