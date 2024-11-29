import Icon from "../Icon";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";

export default function Popup({ data, onModalClose }) {
  const [open, setOpen] = useState(true);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <Transition show={open} afterLeave={onModalClose}>
        <DialogBackdrop
          className="fixed inset-0 bg-neutral-900/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
      </Transition>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-neutral-900 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-neutral-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-neutral-200"
                  >
                    My {data.name}'s certifications
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-neutral-300">
                        Now you can see all the certifications that I have in {data.name}.
                        If you want to access the certification, click on the thumbnail.
                    </p>
                    <div className="grid grid-cols-2 items-end md:grid-cols-4 gap-2 mt-2">
                        {
                            data.certifications.map((certification) => {
                                return (
                                    <a className="rounded-md hover:scale-110 transition-all" key={certification.name} href={certification.file} download={certification.name} target="_blank">
                                        <img className="aspect-auto rounded-md" src={certification.thumbnail} alt="" />
                                    </a>
                                )
                            })
                        }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-950 bg-opacity-20 border-t-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
