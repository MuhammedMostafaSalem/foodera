import getAllTypesHook from "../hooks/getAllTypesHook";

const Table = () => {
    const [itemsAlltypes, loading, error] = getAllTypesHook();

    return (
        <div className="!overflow-x-auto rounded-b-[20px]">
            {loading ? <p className="p-[15px]">جاري التحميل...</p> :
                error ? <p className="text-red-600">حدث خطأ: {error}</p> :
                    <table className="min-w-full bg-white shadow-md">
                        <thead>
                            <tr className="text-gray-700 text-right">
                                <th className="px-4 py-3">القسم بالعربي</th>
                                <th className="px-4 py-3">القسم بالانجليزي</th>
                                <th className="px-4 py-3">الصورة</th>
                                <th className="px-4 py-3">الحالة</th>
                                <th className="px-4 py-3">حذف</th>
                                <th className="px-4 py-3">تعديل</th>
                            </tr>
                        </thead>

                        <tbody>
                            {itemsAlltypes.map(item => (
                                <tr
                                    key={item.Id}
                                    className="border-t"
                                >
                                    <td className="px-4 py-3">{item.Name_Ar}</td>
                                    <td className="px-4 py-3">{item.Name_En}</td>
                                    <td className="px-4 py-3">
                                        <img
                                            src={`http://41.38.56.140/Icons/${item.Icon_path}`}
                                            alt={item.Icon_path}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="px-4 py-3">
                                        <span
                                            className='px-2 py-1 text-sm font-semibold rounded bg-blue-300'
                                        >
                                            {item.status ? "مفعّل" : "غير مفعّل"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <button className="bg-red-600
                                            !text-white
                                            px-3
                                            py-1
                                            rounded
                                            hover:bg-red-700
                                            text-sm"
                                        >
                                        حذف
                                        </button>
                                    </td>
                                    <td className="px-4 py-3">
                                        <button className="bg-purple-600
                                            !text-white
                                            px-3
                                            py-1
                                            rounded
                                            hover:bg-purple-700
                                            text-sm"
                                        >
                                        تعديل
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default Table
