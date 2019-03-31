try:
 	import pygtk
	pygtk.require("2.0")
except:
  	pass
try:
	import gtk
  	import gtk.glade
except:
	sys.exit(1)

# Note that pygtk uses gtk 2. This requires glade2 files.
# To use gtk3 and glade3, use PyGObject instead of PyGTK

class GladeWindow:

    def __init__(self):
        self.gladefile = "glade2test.glade"  
        self.wTree = gtk.glade.XML(self.gladefile) 
        self.window = self.wTree.get_widget("window1")

        if (self.window):
                self.window.connect("destroy", gtk.main_quit)

if __name__ == "__main__":
	gw = GladeWindow()
	gtk.main()
