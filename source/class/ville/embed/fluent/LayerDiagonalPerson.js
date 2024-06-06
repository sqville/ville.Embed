/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LayerDiagonalPerson",
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

   var pathdregular = "M9.82 3.04a.5.5 0 0 1 .68.46v.3l1-.4a1.5 1.5 0 0 0-2.05-1.3L3.58 4.44A2.5 2.5 0 0 0 2 6.75v5.75a1.5 1.5 0 0 0 2 1.41v-1.07l-.32.12A.5.5 0 0 1 3 12.5V6.75c0-.61.38-1.16.95-1.39l5.87-2.32Zm3 2a.5.5 0 0 1 .68.46V6l1-.4v-.1a1.5 1.5 0 0 0-2.05-1.4L6.26 6.57A2 2 0 0 0 5 8.4v6.09a1.5 1.5 0 0 0 2.05 1.4l.95-.38v-1.08l-1.32.52A.5.5 0 0 1 6 14.5V8.4a1 1 0 0 1 .63-.92l6.19-2.45ZM17 7.5a.5.5 0 0 0-.68-.46l-6 2.37a.5.5 0 0 0-.32.47v6.62c0 .35.36.6.68.46l.34-.13c.03.33.12.66.25.98l-.22.08A1.5 1.5 0 0 1 9 16.5V9.88c0-.62.38-1.17.95-1.4l6-2.37A1.5 1.5 0 0 1 18 7.5v2.84c-.26-.38-.6-.7-1-.94V7.5Zm.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.24-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   var pathdfilled = "M11.5 3.4a1.5 1.5 0 0 0-2.05-1.3L3.58 4.44A2.5 2.5 0 0 0 2 6.76v5.74a1.5 1.5 0 0 0 2 1.41v-6c0-.93.56-1.76 1.42-2.1l6.08-2.4Zm3 2.1a1.5 1.5 0 0 0-2.05-1.4L6.26 6.57A2 2 0 0 0 5 8.42v6.08a1.5 1.5 0 0 0 2.05 1.4l.95-.38V9.54a2 2 0 0 1 1.26-1.86L14.5 5.6v-.1Zm1.45.6A1.5 1.5 0 0 1 18 7.5v2.84a3 3 0 1 0-4.73 3.67A2.5 2.5 0 0 0 11 16.5c0 .44.09.89.27 1.3l-.22.1A1.5 1.5 0 0 1 9 16.5V9.88c0-.62.38-1.17.95-1.4l6-2.37ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   
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