// Fetchs
import { showFetch } from './fetchs/tableFetch';
// Actions Creators
import { payload, loading } from "../redux/actions/creators/tableCreator";

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export async function tableShow() {
    loading(true);
    try {
        const response = await showFetch();
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    payload(response.data.data);
                    loading(false);
                    break;

                case false:
                    loading(false);
                    break;

                default:
                    break;
            }
        };
        return response.data;

    } catch (error) {
        loading(false);
        return error.message;
    };
};
