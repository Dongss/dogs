'use strict';

import moment from 'moment';

export default {
    unixtimeFormat (unix) {
        return moment.unix(unix).format('YYYY-MM-DD');
    }
};