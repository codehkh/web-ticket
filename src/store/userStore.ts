import { create } from 'zustand'

import { UserType } from '@/type/UserType'

import { UserDataDummy } from '@/assets/Dummies/userDummy'

type UserStoreType = {
  userInfo: UserType
  total: number
  year: number
  month: number
  subtitle: string
  isLoading: boolean
  error: string | null
  fetchUserInfo: () => Promise<void>
}

const userStore = create<UserStoreType>((set) => ({
  userInfo: { name: '', id: '' },
  total: 0,
  year: 0,
  month: 0,
  subtitle: '',
  isLoading: false,
  error: null,
  fetchUserInfo: async () => {
    set({ isLoading: true, error: null }) // Set loading state
    try {
      //   const response = await axios.get('/api/tickets'); // Replace with your API endpoint
      //   set({ tickets: response.data, isLoading: false });
      set({
        userInfo: UserDataDummy.userInfo,
        total: UserDataDummy.total,
        year: UserDataDummy.year,
        month: UserDataDummy.month,
        subtitle: UserDataDummy.subtitle,
        isLoading: false,
      })
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch tickets', isLoading: false })
    }
  },
}))

export default userStore
