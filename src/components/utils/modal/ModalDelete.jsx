import { useEffect, useRef } from 'react'

const ModalDelete = ({isOpen, onClose, id}) => {
    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
                document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-800/50">
                    <div
                        ref={modalRef}
                        className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in"
                    >
                        <h1>هل أنت متأكد أنك تريد حذف هذا (الid) : {id}</h1>

                        <div className='flex gap-3'>
                            <button
                                onClick={onClose}
                                className="mt-4
                                    bg-green-500
                                    !text-white
                                    px-4
                                    py-2 rounded
                                    hover:bg-green-600
                                    cursor-pointer"
                            >
                                تأكيد
                            </button>
                            <button
                                onClick={onClose}
                                className="mt-4
                                    bg-red-500
                                    !text-white
                                    px-4
                                    py-2
                                    rounded
                                    hover:bg-red-600
                                    cursor-pointer"
                            >
                                إغلاق
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalDelete
