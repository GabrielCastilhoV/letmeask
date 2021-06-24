import copyImg from "../../assets/images/copy.svg";

import toast, { Toaster } from "react-hot-toast";

import "./styles.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    toast.success("Código da sala copiado com sucesso!", {
      id: props.code,
      style: {
        width: "40rem",
      },
    });

    navigator.clipboard.writeText(props.code);
  }

  return (
    <>
      <button onClick={copyRoomCodeToClipboard} className="room-code">
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
      </button>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
