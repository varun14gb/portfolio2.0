import App, { Container } from 'next/app';
import { ThemeProvider } from '../components/context';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../styles/globals.css';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  render() {
    return <>
      <ThemeProvider>
        <this.props.Component {...this.props.pageProps} />
      </ThemeProvider></>
  }
}
