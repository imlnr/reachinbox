import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Correct import

import AllMail from '../pages/AllMail';
import HomeMail from '../pages/HomeMail';
import Archive from '../pages/Archive';
import Search from '../pages/Search';
import List from '../pages/List';
import Sent from '../pages/Sent';
import Poll from '../pages/poll'
const MailRoutes = () => {
    return (
        <Routes>
            <Route path='/mail' element={<HomeMail />} />
            <Route path='/mail/all' element={<AllMail />} />
            <Route path='/mail/archive' element={<Archive />} />
            <Route path='/mail/search' element={<Search />} />
            <Route path='/mail/list' element={<List />} />
            <Route path='/mail/sent' element={<Sent />} />
            <Route path='/mail/stats' element={<Poll />} />
        </Routes>
    );
};

export default MailRoutes;
