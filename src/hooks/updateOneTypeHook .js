import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateOneType } from "../store/thunkApi/storeTypesThunk";

const updateOneTypeHook  = (itemType, id, onClose) => {
    const dispatch = useDispatch();
    
    const [img, setImg] = useState('');
    const [nameAr, setNameAr] = useState('');
    const [nameEn, setNameEn] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        if (itemType) {
            setNameAr(itemType.Name_Ar || '');
            setNameEn(itemType.Name_En || '');
            setIsActive(itemType.IsActive);
            setImg(itemType.Icon_path || '');
        }
    }, [itemType]);

    const onImageChange = (e) => {
        if(e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

    const onNameArChange = (e) => {
        setNameAr(e.target.value)
    }
    
    const onNameEnChange = (e) => {
        setNameEn(e.target.value)
    }

    const onIsActiveChange = (e) => {
        setIsActive(e.target.value === "true");
    }

    const validationValues = () => {
        if(nameAr.trim() === '' || nameEn.trim() === '') {
            alert('الرجاء إدخال بياناتك الجديدة أو إغلاق')
            return;
        }
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        validationValues();

        const payload = {
            Id: id,
            Name_Ar: nameAr,
            Name_En: nameEn,
            IsActive: isActive,
            Icon_path: selectedFile
        }
        await dispatch(UpdateOneType({ id, data: payload }))
        
        console.log('Updated Category ID Successfully');

        setTimeout(() => {
            onClose();
        }, 3000)
    }

    return [
        img,
        nameAr,
        nameEn,
        isActive,
        onImageChange,
        onNameArChange,
        onNameEnChange,
        onIsActiveChange,
        handleEditSubmit
    ]
}

export default updateOneTypeHook 
