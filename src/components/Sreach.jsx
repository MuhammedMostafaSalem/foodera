import { useState } from "react";
import MohalCreate from "./utils/modal/MohalCreate";

const Sreach = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => onClose()
    return (
        <div>
            <div className="bg-yellow-300 flex justify-between p-[20px] rounded-t-[20px]">
                <div>
                    <h3>اقسام التطبيق</h3>
                    <p>جدول الخاص بالاقسام</p>
                </div>

                <div className="flex gap-3">
                    <button
                        className="bg-green-500
                            !text-white
                            px-4
                            py-2
                            rounded-[10px]
                            hover:bg-green-600
                            cursor-pointer"
                            onClick={() => {
                                setShowModal(true);
                            }}
                    >
                        اضافة قسم جديد
                    </button>
                    <input type="search" placeholder="ابحث" className="bg-gray-50 rounded-[10px] px-[10px]" />
                </div>
            </div>

            {showModal && (
                <MohalCreate
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    )
}

export default Sreach
