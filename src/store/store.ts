import { create } from 'zustand';
import { produce } from 'immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) =>
      produce((draft) => {
        draft.CoffeeList = CoffeeData;
        draft.BeanList = BeansData;
        draft.CartPrice = 0;
        draft.FavoritesList = [];
        draft.CartList = [];
        draft.OrderHistoryList = [];
      }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
