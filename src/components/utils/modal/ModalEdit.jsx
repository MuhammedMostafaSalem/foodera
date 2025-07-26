import { useEffect, useRef, useState } from "react";

const ModalEdit = ({isOpen, onClose, id}) => {
    const modalRef = useRef(null);
    const [formData, setFormData] = useState({
        Name_Ar: "",
        Name_En: "",
        IsActive: true,
        Icon_path: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        setTimeout(() => {
            onClose();
        }, 3000)
    }

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
                        <h1>هل أنت متأكد أنك تريد تعديل هذا (الid) : {id}</h1>

                        <form onSubmit={handleSubmit} className="space-y-4 mt-[30px]">
                            <div>
                                <label className="block mb-1 font-medium">القسم بالعربية</label>
                                <input
                                    type="text"
                                    name="Name_Ar"
                                    value={formData.Name_Ar}
                                    onChange={handleChange}
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
                                    value={formData.Name_En}
                                    onChange={handleChange}
                                    placeholder="ادخل القسم بالإنجليزية"
                                    className="w-full border rounded-[10px] px-3 py-2 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">الصورة</label>
                                <div className="flex items-center gap-4">
                                    <label className="cursor-pointer">
                                        <img
                                            src={
                                                formData.Icon_path
                                                    ? URL.createObjectURL(formData.Icon_path)
                                                    : "http://41.38.56.140/Icons/img_6bd6c18a-2fb5-43ea-a5b5-5268482b9c83.jpg"
                                            }
                                            alt="Icon Preview"
                                            className="w-[100px] h-[100px] object-cover rounded-[10px] border"
                                        />
                                        <input
                                            type="file"
                                            name="Icon_path"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        Icon_path: file
                                                    }));
                                                }
                                            }}
                                            className="hidden"
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
                                        checked={formData.IsActive === true}
                                        onChange={() =>
                                            setFormData((prev) => ({ ...prev, IsActive: true }))
                                        }
                                    />
                                    <span>مفعل</span>
                                </label>

                                <label className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        name="IsActive"
                                        value="false"
                                        checked={formData.IsActive === false}
                                        onChange={() =>
                                            setFormData((prev) => ({ ...prev, IsActive: false }))
                                        }
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

export default ModalEdit
