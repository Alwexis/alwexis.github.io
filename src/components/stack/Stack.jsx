import StackInfo from "./StackInfo";
import { useState } from "react";
import Popup from "./Popup";

export default function Stack({ stackData }) {

    const [selectedStack, setSelectedStack] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const onStackSelect = (data) => {
        if (data.certifications.length === 0) return;
        setShowPopup(true);
        setSelectedStack(data);
    }

    const handleModalClose = () => {
        setShowPopup(false);
        setSelectedStack(null);
    }

    return (
        <div className="flex flex-col">
            {
                showPopup && (
                    <Popup data={selectedStack} onModalClose={handleModalClose} />
                )
            }
            <h2 className="font-bold font-nunito-sans tracking-widest text-neutral-100 text-2xl">
                My stack & Skills
            </h2>
            <section className="flex flex-col my-2">
                <div className="flex flex-col mb-2">
                    <h3 className="font-inter tracking-wider text-neutral-300 font-semibold text-lg">
                        Languages:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {
                            stackData.languages.map((item) => (
                                <StackInfo key={item.id} data={item.data} onStackSelect={onStackSelect} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col my-2">
                    <h3 className="font-inter tracking-wider text-neutral-300 font-semibold text-lg">
                        Frameworks:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {
                            stackData.frameworks.map((item) => (
                                <StackInfo key={item.id} data={item.data} onStackSelect={onStackSelect} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col my-2">
                    <h3 className="font-inter tracking-wider text-neutral-300 font-semibold text-lg">
                        Databases:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {
                            stackData.databases.map((item) => (
                                <StackInfo key={item.id} data={item.data} onStackSelect={onStackSelect} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col my-2">
                    <h3 className="font-inter tracking-wider text-neutral-300 font-semibold text-lg">
                        Tools:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {
                            stackData.tools.map((item) => (
                                <StackInfo key={item.id} data={item.data} onStackSelect={onStackSelect} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col mt-2">
                    <h3 className="font-inter tracking-wider text-neutral-300 font-semibold text-lg">
                        Others:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {
                            stackData.others.map((item) => (
                                <StackInfo key={item.id} data={item.data} onStackSelect={onStackSelect} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}
