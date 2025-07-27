import { useEffect, useRef } from "react";
import createNewTypeHook from "../../../hooks/createNewTypeHook";

const MohalCreate = ({isOpen, onClose}) => {
    const [
        img,
        selectedFile,
        onImageChange,
        nameAr,
        onNameArChange,
        nameEn,
        onNameEnChange,
        isActive,
        onIsActiveChange,
        handleEditSubmit
    ] = createNewTypeHook(onClose);
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
                        <h1>اضافة قسم جديد</h1>

                        <form className="space-y-4 mt-[30px]" onSubmit={handleEditSubmit}>
                            <div>
                                <label className="block mb-1 font-medium">القسم بالعربية</label>
                                <input
                                    type="text"
                                    name="Name_Ar"
                                    value={nameAr}
                                    onChange={onNameArChange}
                                    className="w-full border rounded-[10px] px-3 py-2 focus:outline-none"
                                    placeholder="ادخل القسم بالعربية"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">القسم بالإنجليزية</label>
                                <input
                                    type="text"
                                    name="Name_En"
                                    value={nameEn}
                                    onChange={onNameEnChange}
                                    placeholder="ادخل القسم بالإنجليزية"
                                    className="w-full border rounded-[10px] px-3 py-2 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">الصورة</label>
                                <div className="flex items-center gap-4">
                                    <label className="cursor-pointer">
                                        {/* {img && typeof img === 'string' && (
                                        )} */}
                                            <img
                                                src={selectedFile}
                                                alt="Icon Preview"
                                                className="w-[100px] h-[100px] object-cover rounded-[10px] border"
                                            />
                                            <div>{img}</div>
                                        <input
                                            type="file"
                                            name="Icon_path"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={onImageChange}
                                        />
                                    </label>
                                </div>
                            </div>


                            <div className="flex items-center gap-4">
                                <span className="font-medium">الحالة:</span>

                                <label className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        name="IsActive"
                                        value="true"
                                        checked={isActive === true}
                                        onChange={onIsActiveChange}
                                    />
                                    <span>مفعل</span>
                                </label>

                                <label className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        name="IsActive"
                                        value="false"
                                        checked={isActive === false}
                                        onChange={onIsActiveChange}
                                    />
                                    <span>غير مفعل</span>
                                </label>
                            </div>
                        
                            <div className='flex gap-3 pt-2'>
                                <button
                                    type="submit"
                                    className="mt-4
                                        bg-green-500
                                        !text-white
                                        px-4
                                        py-2 rounded
                                        hover:bg-green-600
                                        cursor-pointer"
                                >
                                    تعديل
                                </button>
                                <button
                                    onClick={onClose}
                                    type="button"
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
                        </form>

                    </div>
                </div>
            )}
        </div>
    )
}

export default MohalCreate
