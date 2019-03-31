<h1>Installing mod_wsgi on Arch Linux</h1>

<h2>Install WSGI for Apache</h2>
<p>Install mod_wsgi in apache - refer to arch linux wiki mod_wsgi https://wiki.archlinux.org/index.php/Mod_wsgi</p>

<code>sudo pacman -S mod_wsgi</code>

<p>Add the module to Apache's config file <em>/etc/httpd/conf/httpd.conf<em></p>
<code>LoadModule wsgi_module modules/mod_wsgi.so</code>


<h2>Tell Apache when and where to use WSGI</h2>
<p>Apache will only run WSGI when you tell it to. By adding a WSGIScriptAlias in the Apache host entry, Apache will know to when to invoke WSGI. You can create your own Python file, but it has to follow a few rules to return data correctly. Applications like Django create a wsgi.py file for you, and you just need to point Apache at that file.</p>

<p>This script alias line will alias the URL /myapp to the index.py file.</p>
<code>WSGIScriptAlias /myapp /srv/http/index.py</code>

<h2>Example Apache VirtualHost entry</h2>
<code>
<VirtualHost *:80>
    ServerAdmin nanodano@devdungeon.com.com
    DocumentRoot "/srv/http/devdungeon.com.com"
    ServerName devdungeon.com.com
    ServerAlias www.devdungeon.com.com
    ErrorLog "/var/log/httpd/devdungeon.com-error_log"
    CustomLog "/var/log/httpd/devdungeon.com-access_log" common
    WSGIScriptAlias / /srv/http/devdungeon.com/index.py
</VirtualHost>
</code>

<h2>Example index.py file</h2>
<code>
def wsgi_app(environ, start_response):
    output = "<html><body><h1>WSGI working!</ht></body></html>\n".encode('utf-8')
    status = '200 OK'
    headers = [('Content-type', 'text/html'),
               ('Content-Length', str(len(output)))]
    start_response(status, headers)
    yield output


# mod_wsgi needs the "application" variable to serve our small app
application = wsgi_app
</code>