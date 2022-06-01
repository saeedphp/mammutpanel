export const BASE_URL = 'https://bimeharman.faradns.ir/api/v1.0/';
export const BASE_IMAGE_URL = 'https://bimeharman.faradns.ir/';

export const Elements = {
    states: {
        list_route: "basicdata/state/active",
        detail_route: "basicdata/state/",
        create_route: "basicdata/state/",
        list_fields: [
            {
                name: "name",
                title: "نام استان",
            },
            {
                name: "description",
                title: "توضیحات",
            },
        ],
        form_fields: [
            {
                name: "name",
                title: "نام استان",
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
        ]
    },
    cities: {
        list_route: "basicdata/city/active",
        detail_route: "basicdata/city/",
        create_route: "basicdata/city/",
        list_fields: [
            {
                name: "name",
                title: "نام شهر"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                name: "stateInfo",
                title: "نام استان",
                type: "object",
                object_field: "name"
            }
        ],
        form_fields: [
            {
                name: "name",
                title: "نام شهر"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "stateId",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "stateInfo",
                    value: "id",
                }
            }
        ]
    },
    addresses: {
        list_route: "cms/address/active?pageIndex=0&pageSize=50",
        detail_route: "cms/address/",
        create_route: "cms/address/",
        list_fields: [
            {
                name: "exactAddress",
                title: "آدرس"
            },
            {
                name: "stateInfo",
                title: "نام استان",
                type: "object",
                object_field: 'name'
            },
            {
                name: "cityInfo",
                title: "نام شهر",
                type: "object",
                object_field: "name"
            }
        ],
        form_fields: [
            {
                name: "exactAddress",
                title: "آدرس پستی"
            },
            {
                name: "stateId",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "stateInfo",
                    value: "id",
                }
            },
            {
                name: "cityId",
                title: "شهر",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/city/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityInfo",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: 'boolean'
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان"
            }
        ]
    },
    blogCategories: {
        list_route: "cms/blogcategory/list/active",
        detail_route: "cms/blogcategory/",
        create_route: "cms/blogcategory/",
        list_fields: [
            {
                name: "name",
                title: "عنوان"
            }
        ],
        form_fields: [
            {
                name: "name",
                title: "عنوان"
            },
            {
                name: "ordering",
                title: "ترتیب",
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
            }
        ]
    },
    blogTypes: {
        list_route: "cms/blogtype/active",
        detail_route: "cms/blogtype/",
        create_route: "cms/blogtype/",
        list_fields: [
            {
                name: "name",
                title: "عنوان نوع بلاگ"
            }
        ],
        form_fields: [
            {
                name: "name",
                title: "عنوان"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number"
            }
        ]
    },
    faqs: {
        list_route: "cms/faq/active?pageIndex=0&pageSize=50",
        detail_route: "cms/faq/",
        create_route: "cms/faq/",
        list_fields: [
            {
                name: "question",
                title: "سوال"
            },
            {
                name: "answer",
                title: "پاسخ"
            }
        ],
        form_fields: [
            {
                name: "question",
                title: "سوال"
            },
            {
                name: "answer",
                title: "پاسخ"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number",
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            }
        ]
    },
    healthCenters: {
        list_route: "cms/healthCenter/active?pageIndex=0&pageSize=50",
        detail_route: "cms/healthCenter/",
        create_route: "cms/healthCenter/",
        list_fields: [
            {
                name: "center",
                title: "مرکز"
            },
            {
                name: "centerName",
                title: "نام مرکز"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            }
        ],
        form_fields: [
            {
                name: "center",
                title: "مرکز"
            },
            {
                name: "centerName",
                title: "نام مرکز"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            },
            {
                name: "addressId",
                title: "آدرس مربوطه",
                type: "dropdown",
                dropdown: {
                    route: "cms/address/active?pageIndex=0&pageSize=50",
                    value: "id",
                    text: "exactAddress"
                },
                get: {
                    field: "addressGetResponseDto",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            }
        ]
    },
    images: {
        list_route: "cms/image/active?pageIndex=0&pageSize=50",
        detail_route: "cms/image/",
        create_route: "cms/image/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            },
            {
                name: "customFileId",
                title: "فایل",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    insurances: {
        list_route: "cms/insurance/active?pageIndex=0&pageSize=50",
        detail_route: "cms/insurance/",
        create_route: "cms/insurance/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number",
                default: 1
            },
            {
                name: "isActive",
                tilte: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            },
            {
                name: "imageId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "imageInfo",
                    value: "id",
                    url: "url"
                }
            },
            {
                name: "iconId",
                title: "آیکون",
                type: "image",
                get: {
                    field: "iconInfo",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    insuranceInfos: {
        list_route: "cms/insuranceInfo/active?pageIndex=0&pageSize=50",
        detail_route: "cms/insuranceInfo/",
        create_route: "cms/insuranceInfo/",
        list_fields: [
            {
                name: "insuranceDetail",
                title: "بیمه",
                type: "object",
                object_field: "title"
            },
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "insourceId",
                title: "بیمه",
                type: "dropdown",
                dropdown: {
                    route: "cms/insurance/active?pageIndex=0&pageSize=50",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "insuranceDetail",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            }
        ]
    },
    jobPositions: {
        list_route: "cms/jobPosition/active?pageIndex=0&pageSize=50",
        detail_route: "cms/jobPosition/",
        create_route: "cms/jobPosition/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "category",
                title: "دسته بندی"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "category",
                title: "دسته بندی"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            }
        ]
    },
    pdfs: {
        list_route: "cms/pdf/active?pageIndex=0&pageSize=50",
        detail_route: "cms/pdf/",
        create_route: "cms/pdf/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            },
            {
                name: "customFileId",
                title: "فایل پی دی اف"
            },
            {
                name: "imageId",
                title: "تصویر",
                type: "image",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    representationes: {
        list_route: "cms/representation/active?pageIndex=0&pageSize=50",
        detail_route: "cms/representation/",
        create_route: "cms/representation/",
        list_fields: [
            {
                name: "branchName",
                title: "نام شعبه"
            },
            {
                name: "branchManager",
                title: "مدیر شعبه"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            }
        ],
        form_fields: [
            {
                name: "branchName",
                title: "نام شعبه"
            },
            {
                name: "branchManager",
                title: "مدیر شعبه"
            },
            {
                name: "phoneNumber",
                title: "شماره تماس"
            },
            {
                name: "stateId",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "stateInfo",
                    value: "id",
                }
            },
            {
                name: "cityId",
                title: "شهر",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/city/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityInfo",
                    value: "id",
                }
            },
            {
                name: "exactAddress",
                title: "آدرس"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            }
        ]
    },
    revelations: {
        list_route: "cms/revelation/active?pageIndex=0&pageSize=50",
        detail_route: "cms/revelation/",
        create_route: "cms/revelation/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "ordering",
                title: "ترتیب"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            }
        ]
    },
    revelationAttributes: {
        list_route: "cms/revelationAttribute/active?pageIndex=0&pageSize=100",
        detail_route: "cms/revelationAttribute/",
        create_route: "cms/revelationAttribute/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "revelationGetResponseDto",
                title: "عنوان گزارشگری",
                type: "object",
                object_field: "title"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "revelationId",
                tilte: "عنوان گزارشگری",
                type: "dropdown",
                dropdown: {
                    route: "cms/revelation/active?pageIndex=0&pageSize=50",
                    value: "id",
                    text: "title"
                },
                get: {
                    field: "revelationGetResponseDto",
                    value: "id",
                }
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            }
        ]
    },
    sliderItems: {
        list_route: "cms/sliderItem/active?pageIndex=0&pageSize=100",
        detail_route: "cms/sliderItem/",
        create_route: "cms/sliderItem/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "aboutUsSlider",
                title: "اسلایدر درباره ما",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            },
            {
                name: "customFileId",
                title: "تصویر اسلاید",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    suggestions: {
        list_route: "cms/suggustion/active?pageIndex=0&pageSize=100",
        detail_route: "cms/suggustion/",
        create_route: "cms/suggustion/",
        list_fields: [
            {
                name: "fullName",
                title: "نام"
            },
            {
                name: "mobileNumber",
                title: "شماره تماس"
            },
            {
                name: "text",
                title: "متن"
            }
        ],
        form_fields: [
            {
                name: "fullName",
                title: "نام"
            },
            {
                name: "mobileNumber",
                title: "شماره تماس"
            },
            {
                name: "text",
                title: "متن",
                type: "textarea"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            },
            {
                name: "customFileId",
                title: "فایل مربوطه",
                type: "image",
                get: {
                    field: "imageGetResponse",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    users: {
        list_route: "cms/user/active?pageIndex=0&pageSize=100",
        detail_route: "cms/user/",
        create_route: "cms/user/",
        list_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "userName",
                title: "نام کاربری"
            },
        ],
        form_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "userName",
                title: "نام کاربری"
            },
            {
                name: "password",
                title: "رمز عبور",
                type: "text"
            },
            {
                name: "email",
                title: "ایمیل",
                type: "text"
            },
            {
                name: "mobileNumber",
                title: "شماره همراه",
                type: "text"
            },
            {
                name: "position",
                title: "موقعیت شغلی",
            },
            {
                name: "gender",
                title: "جنسیت",
            },
            {
                name: "age",
                title: "سن",
                type: "numner",
            },
            {
                name: "nationalCode",
                title: "کد ملی",
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "cultureLcid",
                value: "default"
            },
            {
                name: "customFileId",
                title: "customFileId",
                type: "number"
            },
            {
                name: "jobPositionId",
                title: "jobPositionId",
                type: "number"
            },
        ]
    },
    vendorings: {
        list_route: "cms/vendoring/active?pageIndex=0&pageSize=100",
        detail_route: "cms/vendoring/",
        create_route: "cms/vendoring/",
        list_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "fatherName",
                title: "نام پدر"
            },
            {
                name: "gender",
                title: "جنسیت"
            }
        ],
        form_fields: [
            {
                name: "firstName",
                title: "نام"
            },
            {
                name: "lastName",
                title: "نام خانوادگی"
            },
            {
                name: "fatherName",
                title: "نام پدر"
            },
            {
                name: "gender",
                title: "جنسیت"
            },
            {
                name: "nationalCode",
                title: "کد ملی",
            },
            {
                name: "mobileNumber",
                title: "شماره تماس",
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "degreeOfEducation",
                title: "سطح تحصیلات",
            },
            {
                name: "fieldOfStudy",
                title: "زمینه تحصیل",
            },
            {
                name: "militaryService",
                title: "سرویس",
            },
            {
                name: "stateInfo",
                title: "استان",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/state/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityInfo",
                    value: "id",
                }
            },
            {
                name: "cityInfocityInfo",
                title: "شهر",
                type: "dropdown",
                dropdown: {
                    route: "basicdata/city/active",
                    value: "id",
                    text: "name"
                },
                get: {
                    field: "cityInfo",
                    value: "id",
                }
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: 'boolean'
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                value: "default",
            },
            {
                name: "birthDay",
                title: "تولد",
            },
            {
                name: "",
                title: "کد",
            },
            {
                name: "workExperience",
                title: "تجربه",
            },
            {
                name: "ordering",
                title: "ترتیب",
            },
        ]
    },
    visions: {
        list_route: "cms/vision/active?pageIndex=0&pageSize=100",
        detail_route: "cms/vision/",
        create_route: "cms/vision/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "description",
                title: "توضیحات",
                type: "textarea"
            },
            {
                name: "ordering",
                title: "ترتیب",
                type: "number"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            },
            {
                name: "customFileId",
                title: "تصویر مربوطه",
                type: "image",
                get: {
                    field: "customFileGetResponseDto",
                    value: "id",
                    url: "url"
                }
            }
        ]
    },
    visionAttributes: {
        list_route: "cms/visionAttribute?pageIndex=1&pageSize=10",
        detail_route: "cms/visionAttribute/",
        create_route: "cms/visionAttribute/",
        list_fields: [
            {
                name: "title",
                title: "عنوان"
            }
        ],
        form_fields: [
            {
                name: "title",
                title: "عنوان"
            },
            {
                name: "ordering",
                title: "ترتیب"
            },
            {
                name: "isActive",
                title: "فعال بودن",
                type: "boolean"
            },
            {
                name: "cultureLcid",
                title: "شناسه زبان",
                type: "number",
                default: 1065
            }
        ]
    }
}