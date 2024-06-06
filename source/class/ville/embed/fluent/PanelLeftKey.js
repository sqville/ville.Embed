/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PanelLeftKey",
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

   var pathdregular = "M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3.53a4.18 4.18 0 0 0-1-.4V6a2 2 0 0 0-2-2H8.5v11h1.88l-.94.94-.05.06H5a3 3 0 0 1-3-3V6Zm5.5-2H5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2.5V4Zm2.65 14.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z";
   var pathdfilled = "M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.39l.05-.06.94-.94H8.5V4H15a2 2 0 0 1 2 2v3.12a3.85 3.85 0 0 1 1 .41V6a3 3 0 0 0-3-3H5Zm5.15 15.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z";
   
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