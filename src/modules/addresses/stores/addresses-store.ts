import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { AddressEntity, CityEntity, GovernmentEntity } from '../utils/types';

const mockAddresses: AddressEntity[] = [
    {
        id: '01jqybe63e430m2k4zjtsz914f',
        user_id: '01jqhqs5xsprs4fav6g0em60hk',
        government_id: '01jqpdabrqp95xp0apydk29cxj',
        city_id: '01jqpdpgv64dpnk73y2qz9cpes',
        first_name: 'Ahmed',
        last_name: 'Adel',
        title: 'Test235',
        address: 'asd as das dvcfsdf',
        phone: '01132343523',
        government: {
            id: '01jqpdabrqp95xp0apydk29cxj',
            title: 'Aswan',
            shipping_fees: 0,
        },
        city: {
            id: '01jqpdpgv64dpnk73y2qz9cpes',
            government_id: '01jqpdabrqp95xp0apydk29cxj',
            title: 'Edfu',
        },
    },
    {
        id: '01jqybcbe4pz8syv35b3hwyjt6',
        user_id: '01jqhqs5xsprs4fav6g0em60hk',
        government_id: '01jqpdabrqp95xp0apydk29cxj',
        city_id: '01jqpdpgv64dpnk73y2qz9cpes',
        first_name: 'Ahmed',
        last_name: 'Adel',
        title: 'Test23',
        address: 'asd as das dvcfsdf',
        phone: '01132343523',
        government: {
            id: '01jqpdabrqp95xp0apydk29cxj',
            title: 'Aswan',
            shipping_fees: 0,
        },
        city: {
            id: '01jqpdpgv64dpnk73y2qz9cpes',
            government_id: '01jqpdabrqp95xp0apydk29cxj',
            title: 'Edfu',
        },
    },
    {
        id: '01jqybb5f5nedpcmwfaanxj5ww',
        user_id: '01jqhqs5xsprs4fav6g0em60hk',
        government_id: '01jqpdabrqp95xp0apydk29cxj',
        city_id: '01jqpdpgv64dpnk73y2qz9cpes',
        first_name: 'Ahmed',
        last_name: 'Adel',
        title: 'Test2',
        address: 'asd as das dvcfsdf',
        phone: '01132343523',
        government: {
            id: '01jqpdabrqp95xp0apydk29cxj',
            title: 'Aswan',
            shipping_fees: 0,
        },
        city: {
            id: '01jqpdpgv64dpnk73y2qz9cpes',
            government_id: '01jqpdabrqp95xp0apydk29cxj',
            title: 'Edfu',
        },
    },
    {
        id: '01jqyb81q6f0sr9cgx7jc1e379',
        user_id: '01jqhqs5xsprs4fav6g0em60hk',
        government_id: '01jqpdabrqp95xp0apydk29cxj',
        city_id: '01jqpdpgv4x5ke44v0qd85sktm',
        first_name: 'Ahmed',
        last_name: 'Adel',
        title: 'test',
        address: 'asd asd asd as  vc dsfdsf',
        phone: '01132343523',
        government: {
            id: '01jqpdabrqp95xp0apydk29cxj',
            title: 'Aswan',
            shipping_fees: 0,
        },
        city: {
            id: '01jqpdpgv4x5ke44v0qd85sktm',
            government_id: '01jqpdabrqp95xp0apydk29cxj',
            title: 'Kom Ombo',
        },
    },
    {
        id: '01jqy713nfapb8gp36ra8gmys1',
        user_id: '01jqhqs5xsprs4fav6g0em60hk',
        government_id: '01jqpdabrtahxfm1yzerh960f4',
        city_id: '01jqpdpgvysntt7cbhq8qh50f9',
        first_name: 'Ahmed',
        last_name: 'Adel',
        title: 'Home',
        address: 'Some where in the far future',
        phone: '01142387045',
        government: {
            id: '01jqpdabrtahxfm1yzerh960f4',
            title: 'Beheira',
            shipping_fees: 0,
        },
        city: {
            id: '01jqpdpgvysntt7cbhq8qh50f9',
            government_id: '01jqpdabrtahxfm1yzerh960f4',
            title: 'Abu Hummus',
        },
    },
    {
        id: '01jqpgbc3p9dttxzezq9bh0swk',
        user_id: '01jqhqs5xsprs4fav6g0em60hk',
        government_id: '01jqpdabrtahxfm1yzerh960f4',
        city_id: '01jqpdpgvysntt7cbhq8qh50f9',
        first_name: 'Ahmed',
        last_name: 'Adel',
        title: 'Home',
        address: 'Some where in the far future',
        phone: '01142387045',
        government: {
            id: '01jqpdabrtahxfm1yzerh960f4',
            title: 'Beheira',
            shipping_fees: 0,
        },
        city: {
            id: '01jqpdpgvysntt7cbhq8qh50f9',
            government_id: '01jqpdabrtahxfm1yzerh960f4',
            title: 'Abu Hummus',
        },
    },
];

const mockGovernments: GovernmentEntity[] = [
    {
        id: '01jqpdabrmts0d67q4vwa2ksz1',
        title: 'Alexandria',
        shipping_fees: 0,
    },
    {
        id: '01jqpdabrqp95xp0apydk29cxj',
        title: 'Aswan',
        shipping_fees: 0,
    },
    {
        id: '01jqpdabrsh6bmcjm4gf1ewcn5',
        title: 'Asyut',
        shipping_fees: 0,
    },
    {
        id: '01jqpdabrtahxfm1yzerh960f4',
        title: 'Beheira',
        shipping_fees: 0,
    },
    {
        id: '01jqpdabrw76tdd601g0tzbmft',
        title: 'Beni Suef',
        shipping_fees: 0,
    },
    {
        id: '01jqpdabryt8xpgg52qd5c2mjt',
        title: 'Cairo',
        shipping_fees: 0,
    },
];

const mockCities: CityEntity[] = [
    {
        id: '01jqpdpgtq93v829mb2wv98n20',
        government_id: '01jqpdabrmts0d67q4vwa2ksz1',
        title: 'Alexandria',
    },
    {
        id: '01jqpdpgtt4v8pwe1th3qhytaw',
        government_id: '01jqpdabrmts0d67q4vwa2ksz1',
        title: 'Borg El Arab',
    },
    {
        id: '01jqpdpgtwp5jjn7nd8n7kx0nw',
        government_id: '01jqpdabrmts0d67q4vwa2ksz1',
        title: 'Montaza',
    },
    {
        id: '01jqpdpgtym6cnqt3r8tnn8kr3',
        government_id: '01jqpdabrmts0d67q4vwa2ksz1',
        title: 'El Amreya',
    },
    {
        id: '01jqpdpgv091w7v98gmt8axtn9',
        government_id: '01jqpdabrmts0d67q4vwa2ksz1',
        title: 'Agami',
    },
    {
        id: '01jqpdpgv2zpys2trgb7amxg7b',
        government_id: '01jqpdabrqp95xp0apydk29cxj',
        title: 'Aswan',
    },
    {
        id: '01jqpdpgv4x5ke44v0qd85sktm',
        government_id: '01jqpdabrqp95xp0apydk29cxj',
        title: 'Kom Ombo',
    },
    {
        id: '01jqpdpgv64dpnk73y2qz9cpes',
        government_id: '01jqpdabrqp95xp0apydk29cxj',
        title: 'Edfu',
    },
    {
        id: '01jqpdpgv8qt9rt8e7dpbbnnek',
        government_id: '01jqpdabrqp95xp0apydk29cxj',
        title: 'Abu Simbel',
    },
    {
        id: '01jqpdpgvatf9wqvg9q4r0hg2n',
        government_id: '01jqpdabrqp95xp0apydk29cxj',
        title: 'Daraw',
    },
    {
        id: '01jqpdpgvb4c6zt42mxeta97w1',
        government_id: '01jqpdabrsh6bmcjm4gf1ewcn5',
        title: 'Asyut',
    },
    {
        id: '01jqpdpgvdf1evtx9dms9y035g',
        government_id: '01jqpdabrsh6bmcjm4gf1ewcn5',
        title: 'Abnub',
    },
    {
        id: '01jqpdpgvfxxhyvshcpmv75hqs',
        government_id: '01jqpdabrsh6bmcjm4gf1ewcn5',
        title: 'Manfalut',
    },
    {
        id: '01jqpdpgvh76n7qsqyb7wbrhea',
        government_id: '01jqpdabrsh6bmcjm4gf1ewcn5',
        title: 'Dairut',
    },
    {
        id: '01jqpdpgvkbgb3jhtpdp0qxp9q',
        government_id: '01jqpdabrsh6bmcjm4gf1ewcn5',
        title: 'El Qusiya',
    },
    {
        id: '01jqpdpgvnbztcjsm5ac6zdea0',
        government_id: '01jqpdabrtahxfm1yzerh960f4',
        title: 'Damanhur',
    },
    {
        id: '01jqpdpgvq5nx85wpfpzd3s77t',
        government_id: '01jqpdabrtahxfm1yzerh960f4',
        title: 'Kafr El Dawwar',
    },
    {
        id: '01jqpdpgvsc3ejxtkajxgjmb7z',
        government_id: '01jqpdabrtahxfm1yzerh960f4',
        title: 'Rosetta',
    },
    {
        id: '01jqpdpgvv466ng8evqbekxr44',
        government_id: '01jqpdabrtahxfm1yzerh960f4',
        title: 'Edku',
    },
    {
        id: '01jqpdpgvysntt7cbhq8qh50f9',
        government_id: '01jqpdabrtahxfm1yzerh960f4',
        title: 'Abu Hummus',
    },
    {
        id: '01jqpdpgw0jmebmb6sbg9ff16j',
        government_id: '01jqpdabrtahxfm1yzerh960f4',
        title: 'Hosh Issa',
    },
    {
        id: '01jqpdpgw2a4dxje3fkk72qj4j',
        government_id: '01jqpdabrw76tdd601g0tzbmft',
        title: 'Beni Suef',
    },
    {
        id: '01jqpdpgw4s6wrm3dyx1xbntw7',
        government_id: '01jqpdabrw76tdd601g0tzbmft',
        title: 'El Wasta',
    },
    {
        id: '01jqpdpgw6wy9knfgytqc8h2pz',
        government_id: '01jqpdabrw76tdd601g0tzbmft',
        title: 'Nasser',
    },
    {
        id: '01jqpdpgw79qmedfjj2cjv7qdg',
        government_id: '01jqpdabrw76tdd601g0tzbmft',
        title: 'Beba',
    },
    {
        id: '01jqpdpgw9de2bx6zeb06sdpzh',
        government_id: '01jqpdabrw76tdd601g0tzbmft',
        title: 'Fashn',
    },
    {
        id: '01jqpdpgwbgmgt4qgdn8nrqjsj',
        government_id: '01jqpdabryt8xpgg52qd5c2mjt',
        title: 'Cairo',
    },
    {
        id: '01jqpdpgwe224bzvantvrbjvp9',
        government_id: '01jqpdabryt8xpgg52qd5c2mjt',
        title: 'Nasr City',
    },
    {
        id: '01jqpdpgwf8sc6fcw6a9aq06v2',
        government_id: '01jqpdabryt8xpgg52qd5c2mjt',
        title: 'Heliopolis',
    },
    {
        id: '01jqpdpgwhmefd71aqwsr44bzy',
        government_id: '01jqpdabryt8xpgg52qd5c2mjt',
        title: 'Maadi',
    },
    {
        id: '01jqpdpgwkg9r2gseshkymg27z',
        government_id: '01jqpdabrzjgery1pf8y0r52eg',
        title: 'Mansoura',
    },
    {
        id: '01jqpdpgwnpyz7dq2pxdbt1kc0',
        government_id: '01jqpdabrzjgery1pf8y0r52eg',
        title: 'Mit Ghamr',
    },
    {
        id: '01jqpdpgwqc3jz3da022gkfbhp',
        government_id: '01jqpdabrzjgery1pf8y0r52eg',
        title: 'Talkha',
    },
    {
        id: '01jqpdpgwtfz3hdxxzgmemrfv2',
        government_id: '01jqpdabrzjgery1pf8y0r52eg',
        title: 'Belqas',
    },
    {
        id: '01jqpdpgwv9caw95xmwq9d0p9j',
        government_id: '01jqpdabrzjgery1pf8y0r52eg',
        title: 'Sherbin',
    },
    {
        id: '01jqpdpgwxzrbv72e0cwjgch1x',
        government_id: '01jqpdabrzjgery1pf8y0r52eg',
        title: 'Dikirnis',
    },
    {
        id: '01jqpdpgwz60ccxsff5csgkfea',
        government_id: '01jqpdabs1k5dzx736kgmws4jh',
        title: 'Damietta',
    },
    {
        id: '01jqpdpgx19ymwn2pasct2c112',
        government_id: '01jqpdabs1k5dzx736kgmws4jh',
        title: 'Ras El Bar',
    },
    {
        id: '01jqpdpgx380g7q8148wh4g7r2',
        government_id: '01jqpdabs1k5dzx736kgmws4jh',
        title: 'Faraskur',
    },
    {
        id: '01jqpdpgx5c62hj22fpcttyea8',
        government_id: '01jqpdabs1k5dzx736kgmws4jh',
        title: 'Kafr Saad',
    },
    {
        id: '01jqpdpgx74bqh803f5f947n3k',
        government_id: '01jqpdabs1k5dzx736kgmws4jh',
        title: 'Zarqa',
    },
    {
        id: '01jqpdpgx95h0fp4ysa53x30h2',
        government_id: '01jqpdabs285g2qct34qgm8h86',
        title: 'Faiyum',
    },
    {
        id: '01jqpdpgxb8v08ya0bx4m95jsx',
        government_id: '01jqpdabs285g2qct34qgm8h86',
        title: 'Sinnuris',
    },
    {
        id: '01jqpdpgxdpfsvdfqhep6vkm59',
        government_id: '01jqpdabs285g2qct34qgm8h86',
        title: 'Ibshway',
    },
    {
        id: '01jqpdpgxf532xv7v4a53rrqcj',
        government_id: '01jqpdabs285g2qct34qgm8h86',
        title: 'Tamiya',
    },
    {
        id: '01jqpdpgxh83j7f3tfahs8k7te',
        government_id: '01jqpdabs285g2qct34qgm8h86',
        title: 'Yusuf El Siddiq',
    },
    {
        id: '01jqpdpgxkbddpezz0sy2jggbb',
        government_id: '01jqpdabs4tb2mqctbjtgt3m45',
        title: 'Tanta',
    },
    {
        id: '01jqpdpgxnexrvr0xw5t1twb7w',
        government_id: '01jqpdabs4tb2mqctbjtgt3m45',
        title: 'Mahalla El Kubra',
    },
    {
        id: '01jqpdpgxq4nr8pkajq6vwskz3',
        government_id: '01jqpdabs4tb2mqctbjtgt3m45',
        title: 'Zefta',
    },
    {
        id: '01jqpdpgxsb1hh7cr0kvamb8t0',
        government_id: '01jqpdabs4tb2mqctbjtgt3m45',
        title: 'Kafr El Zayat',
    },
    {
        id: '01jqpdpgxvjhvtgn9rys074q75',
        government_id: '01jqpdabs4tb2mqctbjtgt3m45',
        title: 'Samanoud',
    },
    {
        id: '01jqpdpgxx913whbavy0pyf8m0',
        government_id: '01jqpdabs5fcfbgwvs8n5wcyea',
        title: 'Giza',
    },
    {
        id: '01jqpdpgxz4e7k18cs1wr5j7px',
        government_id: '01jqpdabs5fcfbgwvs8n5wcyea',
        title: '6th of October City',
    },
    {
        id: '01jqpdpgy13ypg3s5yw1t0drc8',
        government_id: '01jqpdabs5fcfbgwvs8n5wcyea',
        title: 'Sheikh Zayed City',
    },
    {
        id: '01jqpdpgy3xzw7p54kkan9zdf9',
        government_id: '01jqpdabs5fcfbgwvs8n5wcyea',
        title: 'Imbaba',
    },
    {
        id: '01jqpdpgy5yqpsf41wzdccnbj1',
        government_id: '01jqpdabs5fcfbgwvs8n5wcyea',
        title: 'El Hawamdeya',
    },
    {
        id: '01jqpdpgy7qk7k11szwpjc40vd',
        government_id: '01jqpdabs7s6phnmes088ybfck',
        title: 'Ismailia',
    },
    {
        id: '01jqpdpgy9j2xqx4c97w14fp0x',
        government_id: '01jqpdabs7s6phnmes088ybfck',
        title: 'Fayed',
    },
    {
        id: '01jqpdpgybec4s37e9zzax2v86',
        government_id: '01jqpdabs7s6phnmes088ybfck',
        title: 'Qantara Sharq',
    },
    {
        id: '01jqpdpgydh4at4xqrdhv6m05x',
        government_id: '01jqpdabs7s6phnmes088ybfck',
        title: 'Qantara Gharb',
    },
    {
        id: '01jqpdpgyfws6jfxj93jvptzy9',
        government_id: '01jqpdabs7s6phnmes088ybfck',
        title: 'Tell El Kebir',
    },
    {
        id: '01jqpdpgygr017cqpp9vv1g0py',
        government_id: '01jqpdabs8pk0x24baqeynncsd',
        title: 'Kafr El Sheikh',
    },
    {
        id: '01jqpdpgykw4xge1f7gtpe0tkn',
        government_id: '01jqpdabs8pk0x24baqeynncsd',
        title: 'Desouk',
    },
    {
        id: '01jqpdpgynwy2ym475s2ysphdk',
        government_id: '01jqpdabs8pk0x24baqeynncsd',
        title: 'Baltim',
    },
    {
        id: '01jqpdpgyqkrda7dyr90nde9qt',
        government_id: '01jqpdabs8pk0x24baqeynncsd',
        title: 'Fuwah',
    },
    {
        id: '01jqpdpgysgtee55xgeem1y2zs',
        government_id: '01jqpdabs8pk0x24baqeynncsd',
        title: 'Metoubes',
    },
    {
        id: '01jqpdpgyv9mmp66e8ycxxv6wm',
        government_id: '01jqpdabs9gde12hz01md2v0d4',
        title: 'Luxor',
    },
    {
        id: '01jqpdpgyxn719g5fdeg7mrknp',
        government_id: '01jqpdabs9gde12hz01md2v0d4',
        title: 'Esna',
    },
    {
        id: '01jqpdpgyzt3nvx25swe5p7x40',
        government_id: '01jqpdabs9gde12hz01md2v0d4',
        title: 'Armant',
    },
    {
        id: '01jqpdpgz15w0dnbc9pxs3we99',
        government_id: '01jqpdabs9gde12hz01md2v0d4',
        title: 'El Tod',
    },
    {
        id: '01jqpdpgz38jkf7r1b1z9nqnka',
        government_id: '01jqpdabs9gde12hz01md2v0d4',
        title: 'Qurna',
    },
    {
        id: '01jqpdpgz59tm9bx6dvtzsvyte',
        government_id: '01jqpdabsbvj2x88s4f7wbrk6k',
        title: 'Marsa Matruh',
    },
    {
        id: '01jqpdpgz7vwskem09m89kje29',
        government_id: '01jqpdabsbvj2x88s4f7wbrk6k',
        title: 'Siwa',
    },
    {
        id: '01jqpdpgz97s4ew8zfcwq945ky',
        government_id: '01jqpdabsbvj2x88s4f7wbrk6k',
        title: 'El Alamein',
    },
    {
        id: '01jqpdpgzbtrmcwc3dt1nzjh19',
        government_id: '01jqpdabsbvj2x88s4f7wbrk6k',
        title: 'Sallum',
    },
    {
        id: '01jqpdpgzdx72sd8bs1x8cdee2',
        government_id: '01jqpdabsbvj2x88s4f7wbrk6k',
        title: 'Dabaa',
    },
    {
        id: '01jqpdpgzf0361p794npnrh071',
        government_id: '01jqpdabsd5c5y4nq5ekbzkv87',
        title: 'Minya',
    },
    {
        id: '01jqpdpgzhmf7ggkz6w1xhgfcz',
        government_id: '01jqpdabsd5c5y4nq5ekbzkv87',
        title: 'Mallawi',
    },
    {
        id: '01jqpdpgzkv5ap4bn5714ka79h',
        government_id: '01jqpdabsd5c5y4nq5ekbzkv87',
        title: 'Samalut',
    },
    {
        id: '01jqpdpgznd4t68j97f5jfa10z',
        government_id: '01jqpdabsd5c5y4nq5ekbzkv87',
        title: 'Maghaghah',
    },
    {
        id: '01jqpdpgzqfv4kaw53pztsy68v',
        government_id: '01jqpdabsd5c5y4nq5ekbzkv87',
        title: 'Beni Mazar',
    },
    {
        id: '01jqpdpgzt4j5vpash9s062gth',
        government_id: '01jqpdabse5j34mqjxng1c061g',
        title: 'Shibin El Kom',
    },
    {
        id: '01jqpdpgzwxz17hkp50d3a9h5w',
        government_id: '01jqpdabse5j34mqjxng1c061g',
        title: 'Menouf',
    },
    {
        id: '01jqpdpgzy16p3sjfbz9fpv8mf',
        government_id: '01jqpdabse5j34mqjxng1c061g',
        title: 'Ashmoun',
    },
    {
        id: '01jqpdph00mj3ahrfg9q1qp6ek',
        government_id: '01jqpdabse5j34mqjxng1c061g',
        title: 'Sadat City',
    },
    {
        id: '01jqpdph02294fz1mmkmga7y32',
        government_id: '01jqpdabse5j34mqjxng1c061g',
        title: 'Quesna',
    },
    {
        id: '01jqpdph04e9dd2xek5rvzeetd',
        government_id: '01jqpdabsfjb3d8zgc1eh9q10q',
        title: 'Kharga',
    },
    {
        id: '01jqpdph056wwqrym2x7xt4nnk',
        government_id: '01jqpdabsfjb3d8zgc1eh9q10q',
        title: 'Dakhla',
    },
    {
        id: '01jqpdph07gyh8pvfjqy9pjc40',
        government_id: '01jqpdabsfjb3d8zgc1eh9q10q',
        title: 'Farafra',
    },
    {
        id: '01jqpdph099cnchh0z69jxmetv',
        government_id: '01jqpdabsfjb3d8zgc1eh9q10q',
        title: 'Baris',
    },
    {
        id: '01jqpdph0cv8ep8pddkgysgj19',
        government_id: '01jqpdabsfjb3d8zgc1eh9q10q',
        title: 'Mut',
    },
    {
        id: '01jqpdph0ecz7wkjfc3vfde9sv',
        government_id: '01jqpdabshs9y3e7422gcrf84z',
        title: 'Arish',
    },
    {
        id: '01jqpdph0gnr5anjbqwe7n5e02',
        government_id: '01jqpdabshs9y3e7422gcrf84z',
        title: 'Sheikh Zuweid',
    },
    {
        id: '01jqpdph0h43fe41310cywpvz8',
        government_id: '01jqpdabshs9y3e7422gcrf84z',
        title: 'Rafah',
    },
    {
        id: '01jqpdph0krqqwrtr43haftp9d',
        government_id: '01jqpdabshs9y3e7422gcrf84z',
        title: 'Bir al-Abed',
    },
    {
        id: '01jqpdph0njxykc1w0x4jcchny',
        government_id: '01jqpdabshs9y3e7422gcrf84z',
        title: 'Hassana',
    },
    {
        id: '01jqpdph0qedwfqevfqv55tfx9',
        government_id: '01jqpdabsjh0yphjrzx2xs9ft9',
        title: 'Port Said',
    },
    {
        id: '01jqpdph0s8hwr8y0td3t4kagy',
        government_id: '01jqpdabsjh0yphjrzx2xs9ft9',
        title: 'Port Fouad',
    },
    {
        id: '01jqpdph0v4de3608ss2x4xgqk',
        government_id: '01jqpdabsjh0yphjrzx2xs9ft9',
        title: 'El Manakh',
    },
    {
        id: '01jqpdph0xc4y1wgkxgzx4ctnh',
        government_id: '01jqpdabsk54cevyz5x793dy9n',
        title: 'Banha',
    },
    {
        id: '01jqpdph0zgzj0det5pe3svj6a',
        government_id: '01jqpdabsk54cevyz5x793dy9n',
        title: 'Qalyub',
    },
    {
        id: '01jqpdph11aq80d57msvrvchp5',
        government_id: '01jqpdabsk54cevyz5x793dy9n',
        title: 'Shubra El Kheima',
    },
    {
        id: '01jqpdph125g0q5cr7gva36h3t',
        government_id: '01jqpdabsk54cevyz5x793dy9n',
        title: 'Khanka',
    },
    {
        id: '01jqpdph145yc90hxmqt7jvkts',
        government_id: '01jqpdabsk54cevyz5x793dy9n',
        title: 'Kafr Shukr',
    },
    {
        id: '01jqpdph16e79tfqkh3jaz6d3a',
        government_id: '01jqpdabsms3mpdr21w0v9w0mc',
        title: 'Qena',
    },
    {
        id: '01jqpdph188q6ex9vj68shx310',
        government_id: '01jqpdabsms3mpdr21w0v9w0mc',
        title: 'Nag Hammadi',
    },
    {
        id: '01jqpdph1a9g7g69e23dybrmnf',
        government_id: '01jqpdabsms3mpdr21w0v9w0mc',
        title: 'Dishna',
    },
    {
        id: '01jqpdph1cpng8qvtwnptf1tba',
        government_id: '01jqpdabsms3mpdr21w0v9w0mc',
        title: 'Farshut',
    },
    {
        id: '01jqpdph1ehknz77nbqfz05a34',
        government_id: '01jqpdabsms3mpdr21w0v9w0mc',
        title: 'Qift',
    },
    {
        id: '01jqpdph1gjjfmqqrfn05jfpv1',
        government_id: '01jqpdabspb3brccr9gn35skdp',
        title: 'Hurghada',
    },
    {
        id: '01jqpdph1j67n18qcehgwcc164',
        government_id: '01jqpdabspb3brccr9gn35skdp',
        title: 'Safaga',
    },
    {
        id: '01jqpdph1myhzvzrjqhzgwgqbp',
        government_id: '01jqpdabspb3brccr9gn35skdp',
        title: 'Marsa Alam',
    },
    {
        id: '01jqpdph1pf0a3k84961t5a8tk',
        government_id: '01jqpdabspb3brccr9gn35skdp',
        title: 'Ras Gharib',
    },
    {
        id: '01jqpdph1rrb8mynyt9ea1bhhw',
        government_id: '01jqpdabspb3brccr9gn35skdp',
        title: 'El Quseir',
    },
    {
        id: '01jqpdph1xcsbbp3ww64x8q1x1',
        government_id: '01jqpdabssxg5mhq1eywt99v8e',
        title: 'Sohag',
    },
    {
        id: '01jqpdph1zrx36mg037b3qp40v',
        government_id: '01jqpdabssxg5mhq1eywt99v8e',
        title: 'Girga',
    },
    {
        id: '01jqpdph210kk699twgv9s1xpf',
        government_id: '01jqpdabssxg5mhq1eywt99v8e',
        title: 'Akhmim',
    },
    {
        id: '01jqpdph23g02mmfpvggv544x8',
        government_id: '01jqpdabssxg5mhq1eywt99v8e',
        title: 'Tahta',
    },
    {
        id: '01jqpdph25qnhkp6tsmdnsqaya',
        government_id: '01jqpdabssxg5mhq1eywt99v8e',
        title: 'Maragha',
    },
    {
        id: '01jqpdph27255adf0fc0bg3zq3',
        government_id: '01jqpdabsta2sthmtgmncpjf1g',
        title: 'El Tor',
    },
    {
        id: '01jqpdph28vfasvtptwh0pc0de',
        government_id: '01jqpdabsta2sthmtgmncpjf1g',
        title: 'Sharm El Sheikh',
    },
    {
        id: '01jqpdph2ak5fq9jvcbhpy0tpp',
        government_id: '01jqpdabsta2sthmtgmncpjf1g',
        title: 'Dahab',
    },
    {
        id: '01jqpdph2ck5gvnvb1af2ntfhf',
        government_id: '01jqpdabsta2sthmtgmncpjf1g',
        title: 'Nuweiba',
    },
    {
        id: '01jqpdph2enpbz0jwhrgf4dwx6',
        government_id: '01jqpdabsta2sthmtgmncpjf1g',
        title: 'Taba',
    },
    {
        id: '01jqpdph2g3ran3a8smznfmmxn',
        government_id: '01jqpdabsv2ref22911fak0d2k',
        title: 'Suez',
    },
    {
        id: '01jqpdph2kq07eged8j60x2gyc',
        government_id: '01jqpdabsv2ref22911fak0d2k',
        title: 'Ataqa',
    },
    {
        id: '01jqpdph2nak3k5aaej6sqkbxw',
        government_id: '01jqpdabsv2ref22911fak0d2k',
        title: 'Faisal',
    },
];

type AddressesState = {
    list: AddressEntity[];
    currentAddress?: AddressEntity;
    createModalIsOpen: boolean;
    editModalIsOpen: boolean;
    deleteModalIsOpen: boolean;

    governments: GovernmentEntity[];
    cities: CityEntity[];

    openCreateModal: () => void;
    closeCreateModal: () => void;
    openEditModal: (address: AddressEntity) => void;
    closeEditModal: () => void;
    openDeleteModal: (address: AddressEntity) => void;
    closeDeleteModal: () => void;
};

export const addressesStore = create<AddressesState>((set, get) => ({
    list: mockAddresses,
    currentAddress: undefined,
    createModalIsOpen: false,
    editModalIsOpen: false,
    deleteModalIsOpen: false,

    governments: mockGovernments,
    cities: mockCities,

    openCreateModal: () => set({ createModalIsOpen: true }),
    closeCreateModal: () => set({ createModalIsOpen: false }),

    openEditModal: (address: AddressEntity) =>
        set({ currentAddress: address, editModalIsOpen: true }),
    closeEditModal: () =>
        set({ currentAddress: undefined, editModalIsOpen: false }),

    openDeleteModal: (address: AddressEntity) =>
        set({ currentAddress: address, deleteModalIsOpen: true }),
    closeDeleteModal: () =>
        set({ currentAddress: undefined, deleteModalIsOpen: false }),
}));

export const useAddressesStore = createZustandSelectors(addressesStore);
