import cpp1 from "./images/C++Project01.png";
import cpp2 from "./images/C++Project012.png";
import cpp3 from "./images/C++Project013.png";
import cpp4 from "./images/C++Project021.png";
import cpp5 from "./images/C++Project022.png";
import cpp6 from "./images/C++Project023.png";
import hotel1 from "./images/Hotel01.png";
import hotel2 from "./images/Hotel02.png";
import hotel3 from "./images/Hotel03.png";
import hotel4 from "./images/Hotel04.png";
import hotel5 from "./images/Hotel05.png";
import hotel6 from "./images/Hotel06.png";
import CV1 from "./images/CV1.png";
import CV2 from "./images/CV2.png";
import CV3 from "./images/CV3.png";

import se1 from "./images/singleeco1.jpg";
import se2 from "./images/singleeco2.jpg";
import se3 from "./images/singleeco3.jpg";
import sg1 from "./images/singlebs1.jpg";
import sg2 from "./images/singlebs2.jpg";
import sg3 from "./images/singlebs3.jpg";
import st1 from "./images/singlest1.jpg";
import st2 from "./images/singlest2.jpg";
import st3 from "./images/singlest3.jpg";
import sd1 from "./images/singledx1.jpg";
import sd2 from "./images/singledx2.jpg";
import sd3 from "./images/singledx3.jpg";
import de1 from "./images/doubleeco1.jpg";
import de2 from "./images/doubleeco2.jpg";
import de3 from "./images/doubleeco3.jpg";
import db1 from "./images/doublebs1.jpg";
import db2 from "./images/doublebs2.jpg";
import db3 from "./images/doublebs3.jpg";
import dt1 from "./images/doublest1.jpg";
import dt2 from "./images/doublest2.jpg";
import dt3 from "./images/doublest3.jpg";
import dd1 from "./images/doubledx1.jpg";
import dd2 from "./images/doubledx2.jpg";
import dd3 from "./images/doubledx3.jpg";
import fe1 from "./images/familyeco1.jpg";
import fe2 from "./images/familyeco2.jpg";
import fe3 from "./images/familyeco3.jpg";
import fb1 from "./images/familybs1.jpg";
import fb2 from "./images/familybs2.jpg";
import fb3 from "./images/familybs3.jpg";
import ft1 from "./images/familyst1.jpg";
import ft2 from "./images/familyst2.jpg";
import ft3 from "./images/familyst3.jpg";
import fd1 from "./images/familydx1.jpg";
import fd2 from "./images/familydx2.jpg";
import fd3 from "./images/familydx3.jpg";
import ps1 from "./images/presidential1.jpg";
import ps2 from "./images/presidential2.jpg";
import ps3 from "./images/presidential3.jpg";

export default [{
        sys: {
            id: "1"
        },
        fields: {
            name: "Java Project 01",
            slug: "Java Project 01",
            type: "Java",
            time: 100,
            size: 200,
            difficulty: 1,
            iOS: false,
            android: false,
            featured: false,
            description: "Single room, size 9,5-13m², is a small and simple room offering everything necessary for a comfortable stay : 1 single bed, free WiFi, TV, a work desk and a private bathroom with shower. Internet: complimentary WiFi is available in all hotel rooms.",
            extras: [],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img1
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: se1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: se2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: se3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "2"
        },
        fields: {
            name: "Java Project 02",
            slug: "Java Project 02",
            type: "Java",
            time: 150,
            size: 250,
            difficulty: 1,
            iOS: false,
            android: false,
            featured: false,
            description: "Single basic room, size 9,5-13m², is a small and simple room offering everything necessary for a comfortable stay : 1 single bed, free WiFi, TV, a work desk and a private bathroom with shower.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img2
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: sg1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: sg2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: sg3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "3"
        },
        fields: {
            name: "C++ Project 01",
            slug: "C++ Project 01",
            type: "C++",
            time: 20,
            size: 300,
            difficulty: 1,
            iOS: false,
            android: false,
            featured: false,
            description: "My first project using Cppp programming language. I am practicing the basic concept of Cpp on this project to create a simple game called `The Tally Ho Probability Generator`. The most fundamental concepts are used including file I/O, vector, array, loop or control statement.",
            extras: [
                "Visual Studio",
                "CLion IDE",
                "File I/O",
                "Control Statement",
                "Vector",
                "Array",
                "Object Oriented Programming"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img3
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: cpp1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: cpp2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: cpp3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "4"
        },
        fields: {
            name: "C++ Project 02",
            slug: "C++ Project 02",
            type: "C++",
            time: 40,
            size: 400,
            difficulty: 3,
            iOS: false,
            android: false,
            featured: false,
            description: "My second project using Cpp programming language. This is an upgrade of first project, however, it is applied the knowledge of object oriented concepts to develop the Mastermind Game. It focused on how to apply OOP concept including class, inheritence, polymorphism to develop the game.",
            extras: [
                "Visual Studio",
                "Object Oriented Programmin",
                "Class",
                "Inheritence",
                "Polymorphism",
                "Abstraction",
                "Encapsulation"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img4
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: cpp4
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: cpp5
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: cpp6
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "5"
        },
        fields: {
            name: "iOS Project 01",
            slug: "iOS Project 01",
            type: "Mobile Applications",
            time: 200,
            size: 300,
            difficulty: 2,
            iOS: true,
            android: false,
            featured: false,
            description: "The first project I am planning to develop using Swift in iOS platform. It will focus on create the apps to set reminder straightfoward on the screen.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img5
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: de1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: de2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: de3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "6"
        },
        fields: {
            name: "iOS Project 02",
            slug: "iOS Project 02",
            type: "Mobile Applications",
            time: 250,
            size: 350,
            difficulty: 2,
            iOS: true,
            android: false,
            featured: false,
            description: "The most tiny rooms of the hotel, designed in case you want to enjoy the charm of La Seu d’Urgell at the best time.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img6
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: db1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: db2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: db3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "7"
        },
        fields: {
            name: "Android Project 01",
            slug: "Android Project 01",
            type: "Mobile Applications",
            time: 300,
            size: 400,
            difficulty: 2,
            iOS: false,
            android: true,
            featured: false,
            description: "Our Standard Double rooms are located at the front of the building and enjoy a bright, sunny aspect all day long.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img7
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: dt1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: dt2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: dt3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "8"
        },
        fields: {
            name: "Adnroid Project 02",
            slug: "Adnroid Project 02",
            type: "Mobile Applications",
            time: 400,
            size: 500,
            difficulty: 2,
            iOS: false,
            android: true,
            featured: true,
            description: "A delightful deluxe room offering a double bed and private bathroom. It features LED Television, IDD/DD Phone, dressing table & chair, tea and coffee making facilities , bathroom with monsoon shower and heated towel rails.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img8
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: dd1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: dd2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: dd3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "9"
        },
        fields: {
            name: "Cross-platform Mobile Apps",
            slug: "Cross-platform Mobile Apps",
            type: "Mobile Applications",
            time: 300,
            size: 500,
            difficulty: 3,
            iOS: true,
            android: true,
            featured: false,
            description: "Room Description Family room, with the size of 30,5m², is the largest one in the hotel and can accommodate up to 5 people. Room has 3 single beds and a sofa that turns into a bed. Room can also fit 1 extra bed or 1 baby cot. Sofa bed is comfortable for one adult or up to 2 kids",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img9
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: fe1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: fe2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: fe3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "10"
        },
        fields: {
            name: "CV Project",
            slug: "CV Project",
            type: "Web Development",
            time: 350,
            size: 550,
            difficulty: 4,
            iOS: false,
            android: false,
            featured: false,
            description: "This is my CV project created by using React front-end. I simply created my CV in a web-base and responsive design to fit any screen.",
            extras: [
                "React front-end",
                "ContextAPI",
                "HTML",
                "CSS",
                "Visual Studio Code IDE"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img10
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: CV1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: CV2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: CV3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "11"
        },
        fields: {
            name: "Hotel Project",
            slug: "Hotel Project",
            type: "Web Development",
            time: 5,
            size: 600,
            difficulty: 5,
            iOS: false,
            android: false,
            featured: false,
            description: "The first web project I am using ReactJS front-end to develop. In this project, I created a website front-end to introduce hotel rooms with fundamental details displayed.",
            extras: [
                "ReactJS",
                "CSS",
                "HTML",
                "Visual Studio Code IDE",
                "ContextAPI"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img11
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: hotel1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: hotel2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: hotel3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: hotel4
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: hotel5
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: hotel6
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "12"
        },
        fields: {
            name: "Web Project 01",
            slug: "Web Project 01",
            type: "Web Development",
            time: 500,
            size: 700,
            difficulty: 6,
            iOS: false,
            android: false,
            featured: true,
            description: "Deluxe family rooms with sofa bed, are modern decorated and offering comfortable hospitality to a family with 2 children, or a company of 4 adults. They are totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: img12
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: fd1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: fd2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: fd3
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "13"
        },
        fields: {
            name: "Web Project 03",
            slug: "Web Project 03",
            type: "Web Development",
            time: 600,
            size: 1000,
            difficulty: 10,
            iOS: false,
            android: false,
            featured: true,
            description: "Exuding a sense of ultimate luxury through modern design and amenities, our Presidential Suite is truly one of a kind! Spanning over an incredible area of 200 sq. m. (2153 sq. ft.), this exquisite Suite is exclusively located on the 2nd floor of the main building, in the heart of the hotel and near to all hotel services, offering direct views of the sea and the entire complex.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            // image: [
            //   {
            //     fields: {
            //       file: {
            //         url: room1
            //       }
            //     }
            //   }
            // ],
            images: [{
                    fields: {
                        file: {
                            url: ps1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: ps2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: ps3
                        }
                    }
                }
            ]
        }
    }
];