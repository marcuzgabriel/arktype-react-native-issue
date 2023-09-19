import { scope, type } from 'arktype';
import api from '..';

interface UserInformation {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

/* NOTE: As soon as you uncomment this, then it will work */
// const usersInfoType = type({
//   id: 'number',
//   name: 'string',
//   username: 'string',
//   email: 'string',
//   address: {
//     street: 'string',
//     suite: 'string',
//     city: 'string',
//     zipcode: 'string',
//     geo: {
//       lat: 'string',
//       lng: 'string'
//     }
//   },
//   phone: 'string',
//   website: 'string',
//   company: {
//     name: 'string',
//     catchPhrase: 'string',
//     bs: 'string'
//   },
// })

const usersInfoResponse = scope({
  users: {
    id: 'number',
    name: 'string',
    username: 'string',
    email: 'string',
    address: {
      street: 'string',
      suite: 'string',
      city: 'string',
      zipcode: 'string',
      geo: {
        lat: 'string',
        lng: 'string'
      }
    },
    phone: 'string',
    website: 'string',
    company: {
      name: 'string',
      catchPhrase: 'string',
      bs: 'string'
    },
  },
  response: 'users[]',
}).compile();

type GetUserInfoResponse = typeof usersInfoResponse.response.infer;

const usersApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: builder => ({
      getUsers: builder.query<UserInformation[], void>({
        query: () => '/users',
        providesTags: ['GetUsers'],
        transformResponse: (response: GetUserInfoResponse) => {
          const { problems } = usersInfoResponse.response(response);
          
          if (problems) {
            throw new Error(problems.summary);
          }
          
          return response;
        }
      }),
    })
})

export default usersApi;