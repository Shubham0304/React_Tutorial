import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc, collection} from 'firebase/firestore';
import {auth, db} from '../../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";


interface CreateFormData {

    title: string;
    description: string;
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title"),
        description: yup.string().required("You must add a description"),
    });

    const {register, handleSubmit, formState:{errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    })


    const postsRef = collection(db, "posts"); 
    const onCreatePost = async (data: CreateFormData) => {
        console.log(data);
        addDoc(postsRef, {
            title: data.title,
            description: data.description,
            username: user?.displayName
        })

    }

    return (

        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")}></input>
            <p style = {{color: "red"}}>{errors.title?.message}</p>
            <textarea placeholder="Description..." {...register("description")}></textarea>
            <p style = {{color: "red"}}>{errors.description?.message}</p>
            <input type="submit"/>


        </form>


    )

    
}