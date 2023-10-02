import useApi from "src/composables/UseApi";

export default function postService () {
    const {list,post,update,remove,getId} = useApi('api');

    return {
        list,
        post,
        update,
        remove,
        getId
    }
}