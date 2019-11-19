 var hosts = 'zkd.me develop.dog';
         FiddlerApplication.Log.LogFormat("Logger session {0}, Url: {1}, isHttps: {2}, port: {3}", oSession.id, oSession.fullUrl, oSession.isHTTPS, oSession.port);
        if(hosts.indexOf(oSession.host) > -1){
            FiddlerApplication.Log.LogFormat("Capture session {0}, Url: {1}, isHttps: {2}, port: {3}", oSession.id, oSession.fullUrl, oSession.isHTTPS, oSession.port);
            if(oSession.HTTPMethodIs('CONNECT')){
                FiddlerApplication.Log.LogString('create fake tunnel response');
                oSession['x-replywithtunnel'] = 'FakeTunnel';
                return;
            }

            if (oSession.isHTTPS){
                FiddlerApplication.Log.LogString('switch https to http request');
                oSession.fullUrl = oSession.fullUrl.Replace("https://","http://");
                oSession.port = 80;
            }

            FiddlerApplication.Log.LogFormat("Processed session {0}, Url: {1}, isHttps: {2}, port: {3}", oSession.id, oSession.fullUrl, oSession.isHTTPS, oSession.port);
        }
        FiddlerApplication.Log.LogFormat("Logger session {0}, Url: {1}, isHttps: {2}, port: {3}", oSession.id, oSession.fullUrl, oSession.isHTTPS, oSession.port);
}