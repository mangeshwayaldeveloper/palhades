import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react";
function ContactsBar() {
  return (
    <>
      <div className="flex flex-col md:flex-row p-2 bg-gradient-to-r from-header to-theme text-fuchsia-100 justify-between w-full">
        <div className="md:flex hidden items-center gap-3 md:ml-7">
          <MapPin size={20} color="#fff" />
          <div>Shop No.13, GMC Plaza, Purnanagar, Chinchwad, Pune</div>
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-4 md:mr-7">
          <Phone size={20} color="#fff" />
          <div className="flex flex-col md:flex-row md:gap-4">
            <div>9922 35 0604</div>
            <div> 9923 35 0604</div>
          </div>
          <EnvelopeSimple size={20} color="#fff" />
          <div>palhadesofficial@gmail.com</div>
        </div>
      </div>
    </>
  );
}

export default ContactsBar;
