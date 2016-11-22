'use strict';

import moment from 'moment';
import { CategoryMap } from '../posts/map.js';

export default {
    unixtimeFormat (unix) {
        return moment.unix(unix).format('YYYY-MM-DD');
    }, postCategoryAlias (value) {
        if (value === 'all') {
            return '全部分类';
        }
        return CategoryMap[value] || '未知';
    }
};
