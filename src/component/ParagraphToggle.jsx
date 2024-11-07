import useToggle from "../hooks/useToggle";

const ParagraphToggle = () => {
  const { toggle, handleToggle } = useToggle();
  return (
    <div>
      {toggle && <p id="my-paragraph">This is the paragraph you can toggle</p>}

      <button id="toggle-btn" onClick={handleToggle}>
        Toggle Paragraph
      </button>
    </div>
  );
};

export default ParagraphToggle;
