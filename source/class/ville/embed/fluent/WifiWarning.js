/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WifiWarning",
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

   var pathdregular = "M16.83 7.38c.41.41.8.88 1.14 1.37a.5.5 0 1 1-.83.57 8.61 8.61 0 0 0-14.2 0 .5.5 0 1 1-.82-.58 9.61 9.61 0 0 1 14.71-1.36ZM5.48 9.36a6.45 6.45 0 0 1 8.75-.34c-.37.05-.73.2-1.03.46a5.45 5.45 0 0 0-8.03 1.97.5.5 0 1 1-.89-.45c.3-.6.7-1.15 1.2-1.64Zm4.3 6.62 1.12-2.25a1.3 1.3 0 1 0-1.12 2.25Zm1.9-3.82.46-.9a4.03 4.03 0 0 0-5.8 1.84.5.5 0 0 0 .92.4 3.03 3.03 0 0 1 4.43-1.34Zm1.92-1.6-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z";
   var pathdfilled = "M16.73 7.56c.4.4.78.87 1.11 1.35a.75.75 0 0 1-1.23.85 7.97 7.97 0 0 0-13.14 0 .75.75 0 1 1-1.23-.86 9.47 9.47 0 0 1 14.5-1.34ZM5.48 9.46a6.44 6.44 0 0 1 8.65-.43c-.52.1-1 .4-1.31.9a4.94 4.94 0 0 0-7.2 1.84.75.75 0 0 1-1.33-.67c.3-.61.7-1.16 1.19-1.65Zm4.3 6.51 1.08-2.15a1.24 1.24 0 1 0-1.08 2.15Zm1.7-3.4.68-1.35a4.13 4.13 0 0 0-5.9 1.9.75.75 0 0 0 1.37.6c.13-.32.32-.6.54-.82.9-.9 2.3-1.01 3.31-.33Zm2.12-2.02-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z";
   
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