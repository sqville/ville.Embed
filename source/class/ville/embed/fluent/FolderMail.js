/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FolderMail",
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

   var pathdregular = "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h4.55a2.51 2.51 0 0 1-.05-.5V16H4.5A1.5 1.5 0 0 1 3 14.5V8h4.09c.4 0 .78-.16 1.06-.44L9.7 6h5.79c.83 0 1.5.67 1.5 1.5V10h.5c.17 0 .34.02.5.05V7.5A2.5 2.5 0 0 0 15.5 5H9.7L8.23 3.51A1.75 1.75 0 0 0 6.98 3H4.5ZM3 5.5C3 4.67 3.67 4 4.5 4h2.48c.2 0 .4.08.53.22L8.8 5.5 7.44 6.85a.5.5 0 0 1-.35.15H3V5.5Zm7.01 6.8 4.5 2.63L19 12.5v-.01c0-.83-.67-1.5-1.5-1.5h-6c-.76 0-1.4.57-1.49 1.3ZM19 13.64l-4.26 2.3a.5.5 0 0 1-.5 0L10 13.44v3.05c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-2.86Z";
   var pathdfilled = "M2 5.5A2.5 2.5 0 0 1 4.5 3h2.48c.47 0 .91.18 1.24.51L9.5 4.8 7.44 6.85a.5.5 0 0 1-.35.15H2V5.5ZM2 8v6.5A2.5 2.5 0 0 0 4.5 17h4.55a2.51 2.51 0 0 1-.05-.5v-4a2.5 2.5 0 0 1 2.5-2.5h6c.17 0 .34.02.5.05V7.5A2.5 2.5 0 0 0 15.5 5h-4.8L8.16 7.56A1.5 1.5 0 0 1 7.09 8H2Zm8.01 4.3 4.5 2.63L19 12.5v-.01c0-.83-.67-1.5-1.5-1.5h-6c-.76 0-1.4.57-1.49 1.3ZM19 13.64l-4.26 2.3a.5.5 0 0 1-.5 0L10 13.44v3.05c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-2.86Z";
   
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