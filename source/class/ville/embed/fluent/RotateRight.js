/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RotateRight",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M7.61 12c.3 0 .54-.23.54-.52a.53.53 0 0 0-.54-.52h-.35c-1.77 0-3.2-1.08-3.2-2.42 0-1.3 1.35-2.36 3.04-2.42h5.08L10.96 7.3c-.2.2-.2.53 0 .73.2.18.49.2.7.05l.06-.05 2.12-2.08c.21-.2.21-.53 0-.73l-2.12-2.08-.06-.05a.54.54 0 0 0-.7.05c-.2.2-.2.53 0 .74l1.22 1.19H7.26C4.9 5.08 3 6.63 3 8.54S4.9 12 7.26 12h.35ZM16 10.41V16H5.82L16 10.41Zm.2 6.59c.44 0 .8-.34.8-.75V9.38c0-.21-.18-.38-.4-.38a.41.41 0 0 0-.2.05L3.2 16.3a.37.37 0 0 0-.15.51c.07.12.2.19.35.19h12.8Z";
   var pathdfilled = "M7.61 12c.3 0 .54-.23.54-.52a.53.53 0 0 0-.54-.52h-.35c-1.77 0-3.2-1.08-3.2-2.42 0-1.3 1.35-2.36 3.04-2.42h5.08L10.96 7.3c-.2.2-.2.53 0 .73.2.18.49.2.7.05l.06-.05 2.12-2.08c.21-.2.21-.53 0-.73l-2.12-2.08-.06-.05a.54.54 0 0 0-.7.05c-.2.2-.2.53 0 .74l1.22 1.19H7.26C4.9 5.08 3 6.63 3 8.54S4.9 12 7.26 12h.35Zm9-3c.21 0 .39.17.39.38v6.87c0 .41-.36.75-.8.75H3.4a.4.4 0 0 1-.35-.19.37.37 0 0 1 .15-.51l13.2-7.25a.41.41 0 0 1 .2-.05Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});