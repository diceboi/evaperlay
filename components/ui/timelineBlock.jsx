import Secondarybluebutton from "./SecondaryBlueButton";

export default function TimelineBlock({ title, text, type }) {
  return (
    <div className="relative flex flex-col gap-4 pl-12 lg:pl-28 py-8 ">
        {type === 'start' &&(
            <div className="absolute w-1 h-full left-4 top-0 bg-gradient-to-b from-transparent to-[--dukeblue]"></div>
        )}
        {type === 'middle' &&(
            <div className="absolute w-1 h-full left-4 top-0 bg-[--dukeblue]"></div>
        )}
        {type === 'end' &&(
            <div className="absolute w-1 h-full left-4 top-0 bg-gradient-to-t from-transparent to-[--dukeblue]"></div>
        )}
      <p className="bg-[--aquamarine] w-fit p-2 text-xl lg:text-2xl text-center font-medium">
        {title}
      </p>
      <p className="lg:text-xl text-sm">
        {text}
      </p>
      <div className="absolute w-8 h-8 bg-[--aquamarine] left-[2px] top-[54px] -translate-y-1/2 rounded-full"></div>
    </div>
  );
}
