/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoChat",
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

   var pathdregular = "M5 4a3 3 0 0 0-3 3v2.26c.3-.26.64-.48 1-.66V7c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v6a2 2 0 0 1-1.16 1.81c-.1.4-.24.8-.42 1.16A3 3 0 0 0 13 13v-.32l3.04 2.1c.83.57 1.96-.03 1.96-1.03v-7.5c0-1-1.13-1.6-1.96-1.03L13 7.32V7a3 3 0 0 0-3-3H5Zm8 4.54 3.6-2.5c.17-.1.4.01.4.21v7.5c0 .2-.23.32-.4.2L13 11.46V8.54ZM5.5 18a4.5 4.5 0 1 0-3.94-2.32l-.54 1.8c-.1.3.2.6.5.5l1.8-.54c.64.36 1.39.56 2.18.56ZM3 12.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z";
   var pathdfilled = "M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v6a3 3 0 0 1-2.58 2.97A5.5 5.5 0 0 0 2 9.26V7Zm14.04 7.78L14 13.37V6.63l2.04-1.4c.83-.58 1.96.01 1.96 1.02v7.5c0 1-1.13 1.6-1.96 1.03ZM5.5 18a4.5 4.5 0 1 0-3.94-2.32l-.54 1.8c-.1.3.2.6.5.5l1.8-.54c.64.36 1.39.56 2.18.56ZM3 12.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z";
   
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