import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { mapOutline, mapSharp, heartOutline, heartSharp, personOutline, personSharp, walletOutline, walletSharp, logOutOutline, logOutSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Account Info',
    url: '/page/Inbox',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Map',
    url: '/page/Archived',
    iosIcon: mapOutline,
    mdIcon: mapSharp
  },
  {
    title: 'Payment Methods',
    url: '/page/Outbox',
    iosIcon: walletOutline,
    mdIcon: walletSharp
  },
  {
    title: 'Past Orders',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Log Out', // Do we even need this?
    url: '/page/Trash',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Drive Thru</IonListHeader>
          <IonNote>Hi, Username</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
