import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Tamkeen from '../assets/tamkeen tech.png';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Submissions = () => {
    const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
    const [userApplications, setUserApplications] = useState([]);

    useEffect(() => {
        getUserApplications();
    }, []);

    const getUserApplications = async () => {
        try {
            const companiesDataRef = collection(db, 'CompaniesData');
            const companiesSnapshot = await getDocs(companiesDataRef);

            let allUserApplications = [];

            for (let companyDoc of companiesSnapshot.docs) {
                const companyData = companyDoc.data();
                const { candidates } = companyData;

                if (candidates) {
                    candidates.sort((a, b) => new Date(a.appliedDate) - new Date(b.appliedDate));

                    const userCandidates = candidates
                        .map((candidate, index) => ({
                            companyId: companyDoc.id,
                            companyName: companyData.companyName,
                            status:candidate.status,
                            queuePosition: index + 1, 
                            ...candidate
                        }))
                        .filter(candidate => candidate.studentID === getLocal.id); 

                    allUserApplications = allUserApplications.concat(userCandidates);
                }
            }

            setUserApplications(allUserApplications);
        } catch (error) {
            console.error('Error getting user applications:', error);
        }
    };

    return (
        <>
            <Nav />
            <div className='bg-[#f7f7f7] h-full w-full flex justify-center items-center'>
                <div className='flex flex-col justify-center items-start mt-8 mr-8 mb-8 ml-8 w-full h-full'>
                    <div className='bg-white w-full h-full rounded-lg'>
                        <div className='flex justify-between items-end w-full h-[10vh]'>
                            <p className='font-semibold text-[1.5rem] mr-3 pt-6 pr-1 text-[#5C59C2]'>تقديماتي</p>
                            <div className='flex gap-2'>
                                <Link to='/'><button className="rounded-lg text-white bg-[#999999] hover:bg-[#b1b1b1] py-1 px-3 ml-3">عودة</button></Link>
                            </div>
                        </div>
                        <div className="w-[90%] mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-28 mt-1 mb-16 max-sm:grid-cols-1 max-sm:gap-y-10">
                            {userApplications.map((application, index) => (
                                <div key={`${application.companyId}-${application.studentID}-${index}`} className='flex items-center mt-6 bg-white w-[30vw] h-full rounded-lg shadow-lg max-sm:w-[80vw]'>
                                    <img className='mr-4 rounded-full h-full w-[10vw] object-cover max-sm:w-[20vw] max-sm:h-[15vh]' src={Tamkeen} alt="Company Logo" />
                                    <div className='mr-4 flex flex-col justify-center items-center gap-4 w-full'>
                                        <div className='w-full'>
                                            <div className='flex gap-2'>
                                                <span className="mt-3 relative flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5fd47c]"></span>
                                                </span>
                                                <p className='font-bold text-[1.2rem]'>{application.companyName}</p>
                                            </div>
                                        </div>
                                        <div className='bg-white w-full flex flex-col gap-1'>
                                            <div className='flex gap-1'>
                                                <p className='text-gray-500 text-[0.9rem]'>حالة التقديم</p>
                                                <span className="text-green-500 text-[0.9rem] font-medium">{application.status}</span>
                                            </div>
                                            <div className='flex gap-1'>
                                                <p className='text-gray text-[0.9rem]'>المسمى الوظيفي</p>
                                                <div className='flex gap-2 flex-wrap'>
                                                    <span className="text-[#686868] text-[0.8rem] border bg-[#eee6f5] rounded-full text-center px-1 py-0.5">{application.positionName}</span>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <p className='text-gray-500 text-[0.9rem]'>في الطابور</p>
                                                <p className='text-[#cc4d36] text-[0.9rem] text-center w-6 h-6'>{application.queuePosition}</p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Submissions;