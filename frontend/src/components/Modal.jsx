// the Modal component takes in several props: title, role, setRole, modalStatus, and setModalStatus.
// these props are used to control the behavior and appearance of the modal component.
export default function Modal({
  title,
  role,
  setRole,
  modalStatus,
  setModalStatus,
}) {
  return (
    <div className="w-80 h-64 w-full flex items-center flex-col justify-center bg-gray-200 rounded-[32px] border-2 border-gray-600 mx-auto">
      <header className="h-16 w-[80%] flex items-center justify-center border-b-2 border-b-gray-600">
        <h1 className="text-[32px] text-black">{title}</h1>
      </header>
      <div className="relative h-24 w-[80%] flex items-center">
        {/* represents the radio button for the clinician role. */}
        <div className="w-[50%]">
          <input
            type="radio"
            name="role"
            id="clinician"
            checked={role === "clinician"}
            onChange={() => setRole("clinician")}
          />
          <label htmlFor="clinician" className="pl-2 text-xl">
            Clinician
          </label>
        </div>
        {/* represents the radio button for the patient role. */}
        <div className="w-[50%] text-right">
          <input
            type="radio"
            name="role"
            id="patient"
            checked={role === "patient"}
            onChange={() => setRole("patient")}
          />
          <label htmlFor="patient" className="pl-2 text-xl">
            Patient
          </label>
        </div>
      </div>
      <div className="relative h-16 w-[80%] flex items-center">
        {/* triggers the connection action when clicked. if the role is not empty, the setModalStatus function is called to close the modal. */}
        <button
          onClick={() => {
            if (role !== "") setModalStatus(false);
          }}
          className="w-full h-12 px-4 mt-auto bg-blue-900 text-white rounded-xl border-2 border-gray-600"
        >
          Connect
        </button>
      </div>
    </div>
  );
}
