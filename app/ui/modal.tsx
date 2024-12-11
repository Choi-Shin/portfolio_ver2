type TModal = {
  title: string;
  content: JSX.Element;
  func?: () => void;
};
export function Modal({ title, content, func }: TModal) {
  return (
    <div className="fixed z-50 pointer-events-auto w-full h-full flex flex-col justify-center items-center  opacity-85">
      <div className="bg-black">
        <div className="flex flex-row justify-between mt-2">
          <div className="font-bold text-lg mr-10 ml-4">{title}</div>
          {func ? (
            <button
              className="border-solid border-2 border-green-400 mr-2 px-2"
              onClick={func}
            >
              X
            </button>
          ) : (
            <></>
          )}
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}
