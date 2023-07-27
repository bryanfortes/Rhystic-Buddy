import type { PropsWithChildren } from "react";

export const LandingPage = (props: PropsWithChildren) => {
  return (
    <div className="hero min-h-screen bg-[url('https://images.unsplash.com/photo-1677545215960-071e5290f9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Rhystic Buddy</h1>
          <p className="mb-5">
            Welcome to Rhystic Buddy <br /> a deck optimizing tool for Magic:
            The Gathering
          </p>
          <button className="btn btn-primary">{props.children}</button>
        </div>
      </div>
    </div>
  );
};
