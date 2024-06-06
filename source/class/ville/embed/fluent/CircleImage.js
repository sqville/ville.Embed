/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleImage",
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

   var pathdregular = "M7.5 3a4.5 4.5 0 0 0-.5 8.97v1A5.5 5.5 0 1 1 12.98 7h-1A4.5 4.5 0 0 0 7.5 3Zm8.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5.5-3A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8h-5ZM9 10.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v5c0 .23-.05.45-.15.65l-2.44-2.44a2 2 0 0 0-2.82 0l-2.44 2.44A1.5 1.5 0 0 1 9 15.5v-5Zm.85 6.35 2.44-2.44a1 1 0 0 1 1.42 0l2.44 2.44c-.2.1-.42.15-.65.15h-5a1.5 1.5 0 0 1-.65-.15Z";
   var pathdfilled = "M10.5 7h2.48A5.5 5.5 0 1 0 7 12.98V10.5A3.5 3.5 0 0 1 10.5 7Zm0 1A2.5 2.5 0 0 0 8 10.5v5c0 .5.15.98.41 1.38l3.18-3.17a2 2 0 0 1 2.82 0l3.18 3.17c.26-.4.41-.87.41-1.38v-5A2.5 2.5 0 0 0 15.5 8h-5Zm5.5 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.88 6.59L13.7 14.4a1 1 0 0 0-1.42 0L9.12 17.6c.4.26.87.41 1.38.41h5c.5 0 .98-.15 1.38-.41Z";
   
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