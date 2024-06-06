/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Hourglass",
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

   var pathdregular = "M5.92 18c-.25 0-.5-.05-.72-.16-.23-.1-.44-.24-.62-.42A1.88 1.88 0 0 1 4 16.08a5.6 5.6 0 0 1 .5-2.3 5.35 5.35 0 0 1 1.44-1.88l1.82-1.52a.5.5 0 0 0 0-.77L5.94 8.1A5.34 5.34 0 0 1 4 3.92c0-.25.05-.5.16-.72.1-.23.24-.44.42-.62A1.88 1.88 0 0 1 5.92 2h8.16c.25 0 .5.05.72.16.23.1.44.24.62.42A1.88 1.88 0 0 1 16 3.92a5.3 5.3 0 0 1-1.94 4.17l-1.82 1.53a.5.5 0 0 0 0 .77l1.82 1.5A5.38 5.38 0 0 1 16 16.09c0 .25-.05.5-.16.72-.1.23-.24.44-.42.62a1.88 1.88 0 0 1-1.34.58H5.92Zm8.12-1a.96.96 0 0 0 .68-.28c.1-.1.16-.2.2-.3.04-.12.07-.24.08-.38a4.33 4.33 0 0 0-1.58-3.37l-1.82-1.52a1.53 1.53 0 0 1-.54-1.15 1.51 1.51 0 0 1 .54-1.16l1.82-1.51A4.33 4.33 0 0 0 15 3.96a.96.96 0 0 0-.28-.68.87.87 0 0 0-.3-.2c-.12-.04-.24-.07-.38-.08H5.96a.98.98 0 0 0-.37.07.87.87 0 0 0-.3.21c-.1.1-.17.2-.21.3-.05.12-.07.24-.08.38a4.49 4.49 0 0 0 .9 2.67c.2.25.42.48.68.7L8.4 8.84a1.51 1.51 0 0 1 0 2.3l-1.82 1.53A4.31 4.31 0 0 0 5 16.04c0 .13.02.26.07.37.05.12.12.22.21.3.1.1.2.16.3.21.12.05.24.07.38.08h8.08Z";
   var pathdfilled = "M13.69 5.4c.2-.44.3-.92.31-1.4H6a3.41 3.41 0 0 0 1.22 2.56l1.82 1.52a2.48 2.48 0 0 1 .9 1.92 2.48 2.48 0 0 1-.9 1.92l-1.82 1.52A3.41 3.41 0 0 0 6 16h8c0-.48-.11-.96-.31-1.4a3.37 3.37 0 0 0-.91-1.16L11 11.91c-.28-.23-.5-.52-.65-.85a2.42 2.42 0 0 1-.29-1.06c.01-.37.11-.73.29-1.06.15-.33.37-.62.65-.85l1.78-1.53c.39-.31.7-.71.91-1.16Z";
   
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