import { FC, PropsWithChildren } from 'hono/jsx';
import Header from '../components/Header';
import { getInitialThemeScript } from '../../../scripts/theme';
import { html } from 'hono/html';
import { env } from '../../validations/env';
import LeftMenu from '../components/LeftMenu';

const RootLayout: FC = (props: PropsWithChildren) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>EDev Dashboard</title>
        <link href='/public/assets/output.css' rel='stylesheet' />

        <script src='https://unpkg.com/htmx.org@2.0.1' defer></script>
        {getInitialThemeScript()}
        {html`
          <script>
            document.addEventListener('htmx:configRequest', (e) => {
              // Add the token to the request headers
              e.detail.headers['Authorization'] = 'Bearer ${env.TOKEN_SECRET}';
            });
          </script>
        `}
      </head>
      <body class='w-full'>
        <div class='flex'>
          <LeftMenu />

          <main class='w-full px-6'>
            <Header />
            <div class='mt-8'>{props.children}</div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
