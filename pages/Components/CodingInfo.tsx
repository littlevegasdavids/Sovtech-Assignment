export default function CodingInfo() {
    return (
      <div className="grid my-10 rounded-lg bg-warning p-5 text-black shadow-xl mx-auto w-full lg:w-3/4 gap-3">
        <p className="text-center font-bold text-3xl underline underline-offset-4">
            Current Coding Levels
        </p>

        <div className="grid grid-cols-2 gap-4">
            <p className="">Tailwindcss ( Lvl 80 - <span className="italic">Junior Wizard</span> )</p>
            <progress className="progress progress-info place-self-center" value="80" max="100"></progress>

            <p className="">DBMS ( Lvl 75 - <span className="italic">Advanced</span> )</p>
            <progress className="progress progress-success place-self-center" value="75" max="100"></progress>

            <p className="">JavaScript ( Lvl 75 - <span className="italic">Advanced</span> )</p>
            <progress className="progress progress-info place-self-center" value="75" max="100"></progress>

            <p className="">Java ( Lvl 70 - <span className="italic">Advanced</span> )</p>
            <progress className="progress progress-success place-self-center" value="70" max="100"></progress>

            <p className="">.Net Core ( Lvl 60 - <span className="italic">Intermediate</span> )</p>
            <progress className="progress progress-info place-self-center" value="60" max="100"></progress>

            <p className="">Python ( Lvl 60 - <span className="italic">Intermediate</span> )</p>
            <progress className="progress progress-success place-self-center" value="60" max="100"></progress>

            <p className="">The Cloud ( Lvl 60 - <span className="italic">Intermediate</span> )</p>
            <progress className="progress progress-info place-self-center" value="60" max="100"></progress>

            <p className="">C++ ( Lvl 40 - <span className="italic">Novice</span> )</p>
            <progress className="progress progress-success place-self-center" value="40" max="100"></progress>
        </div>
      </div>
    )
}