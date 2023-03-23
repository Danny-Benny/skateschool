import * as admin from "firebase-admin";
const firebaseAdminConfig = {
  type: "service_account",
  project_id: "skateschool-a3a15",
  private_key_id: "d4dcfeb72ded73c1cef9276778370c5fd995e1a8",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqi9OOG2gsoWjr\nvI8aj5c5IERxCCfQ+L+YJXKENILOQhtSNGqSsGcZE7/r/rbvainbEoRQfq7oWqcl\n0VJLGJ3xqxvJU3S7zrOpqVsEU7s9g6CeMiyUaahGmLtXBGD6+DFiX059vuYG3SxL\niLl8w9JmU3AEiOnhi0V/yKN/ZqKD/wRTzrwV1CfuaFizUxnkxLpAdNhvoVkmEilA\nHfiWdINYCHww+O7tyb1hN7kcFuq4Xxq5KuEQHmk6av0htq66louxhpAscBQkBK9E\nwI4+2inITvh+THGVW3d1JMrfM6F1kKfK05o+hXeJmC0rYGtBDOat4+bM4LN9YH1K\nZ59RbezfAgMBAAECggEABf5SQvdediMQTAP4q3u3x+1OFd5AXIiKgyqUl2X0dABS\nvOdmqtPmfev5wmSMVB0H3BozWC+yZVCVr8GwSvYtpsn7wgBb90f1M0Mvg2BF7R6j\nXz4l3uuh7W3G7oMS4f8An5OKb3ltHcJZxZXIMUTYeOeMCjzCGRovlsnAScB3C+q0\nhErCs8/34NznhovETc46ZilIGnQpED60AjccMzAdnxUvMia6tndxcWwqA27HZhPm\nGvz5w4lqLe3mHRiVVakW5f8nXMT9+Z0T9Xg1GKXR9Q63H8Trj7zde/GQS2/bdB4/\n+mSDjcSlQOVlAxV/wWT+mq6uFxrONtlkehefTgXKYQKBgQDgARd/l4K3NFH3UZHM\nfFpHsad2BAYwbolbr/KZOaexEbFHdFTZFFOqaAMRyhF1oiQyvg97+imnobdyJWUI\nyFZeUZDfClpqXBuwABCFN1L5PzF4OfKmNeuNlZbhuVSzhy9HY9K8tSkay96qqxf5\ntuMRxLoqmZBHR80VwAL/Odgi9wKBgQDC5/6Ut3CAi5IItiacV4ZnRbMPPoMsCcgJ\nUxoM0o4Km2TUtiOPggO5YjWCnxK0B+v/0+SXrr02KDz0T6M30JJuc/YczP9p2Tpo\nhDdzi6JWvO7L/MN+06e8LdkWOma45fc7LJwKSKXdB75hAcQ0sAfZ1mDgTSEFOacb\nD7u1eQ4jWQKBgAsoAsOYCCqXsH1g0qIcj2KCtpRqHuTKnIy0dqCq/m8TMoEcih1F\npeUWyRBZwATbznG4hYznKKvwofJNanrFf4ezCEQTf+1MKRTa6/e2iatgOlaCjFM6\n3EBw8tLLKCzIztH/Zr9/RkzPWoelfcwyD50S7zKv8z+Zk91BcuTDPMCBAoGBAJ7R\n4n4WmGL22DGnFAFTxN6ESiuC2epZshn/EHwgWsRD6b73CDUZUaWPZGEi9F+lEOav\nKFd9eQsXcMv31N1XZOsCLSs81GfRLioaiwDpaIhbfg7U0gyXtde+WGYngqrqITKj\n4Cb1GcrpU3XCtbnlMxCMAvbjgqO6XfPMNz3h/eZJAoGATJBmdzJYaU5NQz0Lv3ht\nV1ZU/zTy+utnm/N5uAj1cKDtci8wZ4lL8Yk+mESv63BcgWtBgmxBbxYzWNpII38j\natQQEdHwao2/+z8KASWd70LJfACG7XWbq3n016OvTS5pcV43RufaCYyj/ox2QmUa\njMY1vl96lp0EBYQB49+elMg=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-xxm3q@skateschool-a3a15.iam.gserviceaccount.com",
  client_id: "113139304630746245855",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxm3q%40skateschool-a3a15.iam.gserviceaccount.com",
};
if (admin.apps.length === 0) {
  // Initialize Firebase
  admin.initializeApp({
    //@ts-ignore
    credential: admin.credential.cert(firebaseAdminConfig),
  });
}
export const adminAuth = admin.auth;
