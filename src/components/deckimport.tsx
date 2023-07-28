import type { PropsWithChildren } from "react";

export const DeckImport = (props: PropsWithChildren) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          {props.children}
          <textarea
            className="textarea textarea-accent textarea-lg w-full max-w-xs text-text"
            placeholder="This hasn't been implemented yet - Stay tuned!"
          ></textarea>
          <br />
          <button className="btn btn-primary px-10">import!</button>
        </div>
      </div>
    </>
  );
};
