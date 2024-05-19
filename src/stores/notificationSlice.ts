import { StateCreator } from "zustand";
import { FavoriteSliceType } from "./favoritesSlice";

type Notification = {
  text: string,
  error: boolean,
  show: boolean,
}

const intialNotification: Notification = {
  text: "",
  error: false,
  show: false,
}

export type NotificationSliceType = {
  notification: Notification,
  showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void,
  hideNotification: () => void,
}

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoriteSliceType, [], [], NotificationSliceType> = (set, get) => ({
  notification: intialNotification,
  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      }
    })

    setTimeout(() => {
      get().hideNotification()
    }, 4000)
  },
  hideNotification: () => {
    set((state) => ({
      notification: {
        ...state.notification,
        show: false
      }
    }))
  },
})