import {
    LOAD_INITIAL_CONFIG,
    LOAD_HEADER,
    LOAD_FOOTER,
} from '@src/constants/actions';


export const loadInitialConfiguration = () => ({
    type: LOAD_INITIAL_CONFIG,
    payload: {},
});

export const loadHeader = () => ({
    type: LOAD_HEADER,
    payload: {},
});

export const loadFooter = () => ({
    type: LOAD_FOOTER,
    payload: {},
});
