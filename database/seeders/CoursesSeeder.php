<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CoursesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('courses')->insert([
            // If the prerequisite is the year level, then use the following prerequisite_ids:
            // First year: 101
            // Second year: 102
            // Third year: 103
            // Fourth year: 104
            // Fifth year: 105
            // Sixth year: 106

            // Use the following grades for the grades:
            // 0 - Incomplete

            // First-year First Term
            // # 1. ITCP 105 - Computer Programming 1
            [
                'course_code' => 'ITCP 105',
                'course_description' => 'Computer Programming 1', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 1,
                'grade' => 1.3, 
            ],
            // # 2. ITAM 132 - Applied Engineering Mathematics
            [
                'course_code' => 'ITAM 132',
                'course_description' => 'Applied Engineering Mathematics', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 1,
                'grade' => 3.0, 
            ],
            // # 3. GEUS 201 - Understanding the Self
            [
                'course_code' => 'GEUS 201',
                'course_description' => 'Understanding the Self', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 1,
                'grade' => 1.6, 
            ],
            // # 4. GEPH 202 - Readings in Philippine History
            [
                'course_code' => 'GEPH 202',
                'course_description' => 'Readings in Philippine History', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 1,
                'grade' => 5.0, 
            ],
            // # 5. RECM 401 - Salvation History
            [
                'course_code' => 'RESH 401',
                'course_description' => 'Salvation History', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 1,
                'grade' => 2.0, 
            ],
            // # 6. PATH Fit 100 - Physical Activities Towards Health and Fitness Movement Competency Training
            [
                'course_code' => 'PATH Fit 100',
                'course_description' => 'Physical Activities Towards Health and Fitness Movement Competency Training', 
                'prerequisite_id' => null, 
                'lecture_units' => 2,
                'lfc_units' => 0,
                'total_units' => 2,
                'year' => 1,
                'term_id'  => 1,
                'grade' => 1.7, 
            ],
            // # 7. NSTP 201 - National Service Training Program 1 
            [
                'course_code' => 'NSTP 201',
                'course_description' => 'National Service Training Program 1', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 1,
                'grade' => 1.9, 
            ],
        
            // First-year Second Term
            // # 8. ITCP 106 - Introduction to Computing
            [
                'course_code' => 'ITIC 102',
                'course_description' => 'Introduction to Computing', 
                'prerequisite_id' => null, 
                'lecture_units' => 2,
                'lfc_units' => 0,
                'total_units' => 2,
                'year' => 1,
                'term_id'  => 2,
                'grade' => 1.4, 
            ], 
            // # 9. GEES 210 - Environmental Science
            [
                'course_code' => 'GEES 210',
                'course_description' => 'Environmental Science', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 2,
                'grade' => 2.1, 
            ],
            // # 10. GECW 203 - The Contemporary World
            [
                'course_code' => 'GECW 203',
                'course_description' => 'The Contemporary World', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 2,
                'grade' => 5.0, 
            ],
            // # 11. GEMM 204 - Mathematics in the Modern World
            [
                'course_code' => 'GEMM 204',
                'course_description' => 'Mathematics in the Modern World', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 2,
                'grade' => 1.8, 
            ],
            // # 12. RECM 402 - Christiology and Mariology
            [
                'course_code' => 'RECM 402',
                'course_description' => 'Christiology and Mariology', 
                'prerequisite_id' => 5, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 2,
                'grade' => 2, 
            ],
            // # 13. PATH Fit 200 - Physical Activities Towards Health and Fitness Exercise Based Fitness Activities
            [
                'course_code' => 'PATH Fit 200',
                'course_description' => 'Physical Activities Towards Health and Fitness Exercise Based Fitness Activities', 
                'prerequisite_id' => 6, 
                'lecture_units' => 2,
                'lfc_units' => 0,
                'total_units' => 2,
                'year' => 1,
                'term_id'  => 2,
                'grade' => 1.75, 
            ],
            // # 14. NSTP 202 - CWTS
            [
                'course_code' => 'NSTP 202',
                'course_description' => 'CWTS', 
                'prerequisite_id' => 7, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 2,
                'grade' => null, 
            ],

            // First-year Third Term
            // # 15. ITCI 103 - Introduction to Human Computer Interaction 
            [
                'course_code' => 'ITCI 103',
                'course_description' => 'Introduction to Human Computer Interaction', 
                'prerequisite_id' => 8, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 3,
                'grade' => null, 
            ],
            // # 16. GEIC 211 - Philippine Indigenous Communities
            [
                'course_code' => 'GEIC 211',
                'course_description' => 'Philippine Indigenous Communities', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 3,
                'grade' => 2.4, 
            ],
            // # 17. GEPC 205 - Purposive Communication
            [
                'course_code' => 'GEPC 205',
                'course_description' => 'Purposive Communication', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 3,
                'grade' => null, 
            ],
            // # 18. GEAA 206- Art Appreciation
            [
                'course_code' => 'GEAA 206',
                'course_description' => 'Art Appreciation', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 3,
                'grade' => null, 
            ],
            // # 19. GEST 207 - Science, Technology and Society
            [
                'course_code' => 'GEST 207',
                'course_description' => 'Science, Technology and Society', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 3,
                'grade' => null, 
            ],
            // # 20. RELS 403 - Litirgy and Sacraments, Christian Morality and Social Responsibility with Palawan Environmental Laws
            [
                'course_code' => 'RELS 403',
                'course_description' => 'Litirgy and Sacraments, Christian Morality and Social Responsibility with Palawan Environmental Laws', 
                'prerequisite_id' => 12, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 1,
                'term_id'  => 3,
                'grade' => null, 
            ],
            // # 20. PATH Fit 300 - Physical Activities Towards Health and Fitness Menu of Dance Sports 
            [
                'course_code' => 'PATH Fit 300',
                'course_description' => 'Physical Activities Towards Health and Fitness Menu of Dance Sports', 
                'prerequisite_id' => 13, 
                'lecture_units' => 2,
                'lfc_units' => 0,
                'total_units' => 2,
                'year' => 1,
                'term_id'  => 3,
                'grade' => null, 
            ],

            # Second Year First Term
            # 21. ITCP 105 - Computer Programming 1 (Fundamentals of Programming)
            [
                'course_code' => 'ITCP 105',
                'course_description' => 'Computer Programming 1 (Fundamentals of Programming)', 
                'prerequisite_id' => 8, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 1,
                'grade' => 1.25, 
            ],
            # 22. ITCI 104 - Human Computer Interaction 2
            [
                'course_code' => 'ITCI 104',
                'course_description' => 'Human Computer Interaction 2', 
                'prerequisite_id' => 15, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 1,
                'grade' => 2.2, 
            ],
            # 23. ITIM 107 - Fundamentals of Information Management
            [
                'course_code' => 'ITIM 107',
                'course_description' => 'Fundamentals of Information Management', 
                'prerequisite_id' => 102, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 1,
                'grade' => 1.4, 
            ],
            # 24. GEEM 212 - The Entrepreneurial Mind
            [
                'course_code' => 'GEEM 212',
                'course_description' => 'The Entrepreneurial Mind', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 1,
                'grade' => 1.4, 
            ],
            # 25. GEET 208 - Ethics
            [
                'course_code' => 'GEET 208',
                'course_description' => 'Ethics', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 1,
                'grade' => 1.3, 
            ],
            # 26. RECH 404 - Church History, Catechesis and Church Documents
            [
                'course_code' => 'RECH 404',
                'course_description' => 'Church History, Catechesis and Church Documents', 
                'prerequisite_id' => 20, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 1,
                'grade' => 2.1, 
            ],
            # 27. PATH Fit 400 - Physical Activities Towards Health and Fitness Menu of Outdoor and Adventure Activities
            [
                'course_code' => 'PATH Fit 400',
                'course_description' => 'Physical Activities Towards Health and Fitness Menu of Outdoor and Adventure Activities', 
                'prerequisite_id' => 20, 
                'lecture_units' => 2,
                'lfc_units' => 0,
                'total_units' => 2,
                'year' => 2,
                'term_id'  => 1,
                'grade' => 0, 
            ],

            # Second Year Second Term
            # 28. ITCP 106 - Computer Programming 2 (Intermediate Programming)
            [
                'course_code' => 'ITCP 106',
                'course_description' => 'Computer Programming 2 (Intermediate Programming)', 
                'prerequisite_id' => 21, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 2,
                'grade' => 1.9, 
            ],
            # 29. ITDS 108 - Data Structures and Algorithms
            [
                'course_code' => 'ITDS 108',
                'course_description' => 'Data Structures and Algorithms', 
                'prerequisite_id' => 21, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 2,
                'grade' => 1.3, 
            ],
            # 30. ITIM 109 - Information Management
            [
                'course_code' => 'ITIM 109',
                'course_description' => 'Information Management', 
                'prerequisite_id' => 23, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 2,
                'grade' => 1.3, 
            ],
            # 31. ITDS 110 - Fundamentals of Database Systems
            [
                'course_code' => 'ITDS 110',
                'course_description' => 'Fundamentals of Database Systems', 
                'prerequisite_id' => 21, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 2,
                'grade' => 1.4, 
            ],
            # 32. ITOP 111 - Object-Oriented Programming
            [
                'course_code' => 'ITOP 111',
                'course_description' => 'Object-Oriented Programming', 
                'prerequisite_id' => 21, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 2,
                'grade' => 1.25, 
            ],
            # 33. ITNT 114 - Networking 1 (Fundamentals of Networking)
            [
                'course_code' => 'ITNT 114',
                'course_description' => 'Networking 1 (Fundamentals of Networking)', 
                'prerequisite_id' => 22, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 2,
                'grade' => 1.4, 
            ],

            # Second Year Third Term
            # 34. ITAD 112 - Application Development and Emerging Technologies
            [
                'course_code' => 'ITAD 112',
                'course_description' => 'Application Development and Emerging Technologies', 
                'prerequisite_id' => 8, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 3,
                'grade' => 1.25, 
            ],
            # 35. ITED 113 - Event Driven Programming
            [
                'course_code' => 'ITED 113',
                'course_description' => 'Event Driven Programming', 
                'prerequisite_id' => 8, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 3,
                'grade' => 2.8, 
            ],
            # 36. GERL 209 - Life and Works of Rizal
            [
                'course_code' => 'GERL 209',
                'course_description' => 'Life and Works of Rizal', 
                'prerequisite_id' => null, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 3,
                'grade' => 1.6, 
            ],
            # 37. ITIP 116 - Integrative Programming & Technologies 1
            [
                'course_code' => 'ITIP 116',
                'course_description' => 'Integrative Programming & Technologies 1', 
                'prerequisite_id' => 32, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 3,
                'grade' => 1.4, 
            ],
            # 38. ITSI 117 - Systems Integration & Architecture 1
            [
                'course_code' => 'ITSI 117',
                'course_description' => 'Systems Integration & Architecture 1', 
                'prerequisite_id' => 29, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 3,
                'grade' => 1.2, 
            ],
            # 39. ITWS 124 - Web Systems and Technologies
            [
                'course_code' => 'ITWS 124',
                'course_description' => 'Web Systems and Technologies', 
                'prerequisite_id' => 103, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 2,
                'term_id'  => 3,
                'grade' => 1.3, 
            ],

            # Third Year First Term
            # 40. ITNT 115 - Networking 2 (Advanced Networking)
            [
                'course_code' => 'ITNT 115',
                'course_description' => 'Networking 2 (Advanced Networking)', 
                'prerequisite_id' => 33, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 1,
                'grade' => 1.7, 
            ],
            # 41. ITIA 120 - Information Assurance and Security 1
            [
                'course_code' => 'ITIA 120',
                'course_description' => 'Information Assurance and Security 1', 
                'prerequisite_id' => 38, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 1,
                'grade' => null, 
            ],
            # 42. ITSA 122 - Systems Administration and Maintenance
            [
                'course_code' => 'ITSA 122',
                'course_description' => 'Systems Administration and Maintenance', 
                'prerequisite_id' => 38, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 1,
                'grade' => null, 
            ],
            # 43. ITTE 129 - Technopreneurship
            [
                'course_code' => 'ITTE 129',
                'course_description' => 'Technopreneurship', 
                'prerequisite_id' => 103, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 1,
                'grade' => 1.9, 
            ],
            # 44. ITDM 119 - Discrete Mathematics
            [
                'course_code' => 'ITDM 119',
                'course_description' => 'Discrete Mathematics', 
                'prerequisite_id' => 102, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 1,
                'grade' => 1.3, 
            ],
            # 45. ITCP 125 - Capstone Project & Research 1 
            [
                'course_code' => 'ITCP 125',
                'course_description' => 'Capstone Project & Research 1', 
                'prerequisite_id' => 38, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 1,
                'grade' => null, 
            ],

            # Third Year Second Term
            # 46. ITCP 126 - Capstone Project & Research 2
            [
                'course_code' => 'ITCP 126',
                'course_description' => 'Capstone Project & Research 2', 
                'prerequisite_id' => 45, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 2,
                'grade' => 2.5, 
            ],
            # 47. ITPR 130 - Practicum (480 Hours)
            [
                'course_code' => 'ITPR 130',
                'course_description' => 'Practicum (480 Hours)', 
                'prerequisite_id' => 103, 
                'lecture_units' => 6,
                'lfc_units' => 0,
                'total_units' => 6,
                'year' => 3,
                'term_id'  => 2,
                'grade' => null, 
            ],
            # 48. ITFS 131 - Fieldtrips and Seminars
            [
                'course_code' => 'ITFS 131',
                'course_description' => 'Fieldtrips and Seminars', 
                'prerequisite_id' => 103, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 2,
                'grade' => null, 
            ],

            # Third Year Third Term
            # 49. ITSI 127 - Social and Professional Issues
            [
                'course_code' => 'ITSI 127',
                'course_description' => 'Social and Professional Issues', 
                'prerequisite_id' => 103, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 3,
                'grade' => 2.2, 
            ],
            # 50. ITIA 121 - Information Assurance and Security 2
            [
                'course_code' => 'ITIA 121',
                'course_description' => 'Information Assurance and Security 2', 
                'prerequisite_id' => 41, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 3,
                'grade' => null, 
            ],
            # 51. ITQM 126 - Quantitative Methods (inc. Modelling & Simulation)
            [
                'course_code' => 'ITQM 126',
                'course_description' => 'Quantitative Methods (inc. Modelling & Simulation)', 
                'prerequisite_id' => 45, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 3,
                'grade' => 1.1, 
            ],
            # 52. ITPT 123 - Platform Technologies (Elec 1)
            [
                'course_code' => 'ITPT 123',
                'course_description' => 'Platform Technologies (Elec 1)', 
                'prerequisite_id' => 103, 
                'lecture_units' => 3,
                'lfc_units' => 0,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 3,
                'grade' => 2, 
            ],
            # 53. ITSI 118 - Systems Integration & Architecture 2
            [
                'course_code' => 'ITSI 118',
                'course_description' => 'Systems Integration & Architecture 2', 
                'prerequisite_id' => 38, 
                'lecture_units' => 2,
                'lfc_units' => 1,
                'total_units' => 3,
                'year' => 3,
                'term_id'  => 3,
                'grade' => null, 
            ],
        ]);
    }
}
