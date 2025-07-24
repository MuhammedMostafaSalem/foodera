const Table = () => {
    const data = [
        {
            id: 1,
            name_ar: "القسم الأول",
            name_en: "Section One",
            image: "https://via.placeholder.com/40",
            status: true,
        },
        {
            id: 2,
            name_ar: "القسم الثاني",
            name_en: "Section Two",
            image: "https://via.placeholder.com/40",
            status: false,
        },
    ];

    return (
        <div className="!overflow-x-auto rounded-b-[20px]">
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
                    {data.map(item => (
                        <tr
                            key={item.id}
                            className="border-t"
                        >
                            <td className="px-4 py-3">{item.name_ar}</td>
                            <td className="px-4 py-3">{item.name_en}</td>
                            <td className="px-4 py-3">
                                <img
                                    src={item.image}
                                    alt={item.name_en}
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
        </div>
    )
}

export default Table
