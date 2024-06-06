/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Food",
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

   var pathdregular = "M4.67 2a1.3 1.3 0 0 0-1.29 1.07C3.23 3.89 3 5.34 3 6.5a3.5 3.5 0 0 0 1.6 2.94c.27.17.4.4.4.6v.4a318.17 318.17 0 0 0 3 0v-.4c0-.2.13-.43.4-.6A3.5 3.5 0 0 0 10 6.5c0-1.16-.23-2.61-.38-3.43A1.3 1.3 0 0 0 8.32 2c-.33 0-.64.13-.87.34a1.5 1.5 0 0 0-1.9 0C5.32 2.13 5.01 2 4.67 2ZM6 3.5a.5.5 0 0 1 1 0v3a.5.5 0 0 0 1 0V3.33c0-.18.15-.33.33-.33.16 0 .28.1.3.25.15.81.37 2.19.37 3.25a2.5 2.5 0 0 1-1.14 2.1c-.44.28-.86.78-.86 1.44V10.6c.04.25.16 1.42.28 2.62.11 1.21.22 2.41.22 2.77a1 1 0 1 1-2 0c0-.36.1-1.56.22-2.77A318.23 318.23 0 0 1 6 10.45v-.41c0-.66-.42-1.16-.86-1.44A2.5 2.5 0 0 1 4 6.5c0-1.06.22-2.44.36-3.25A.3.3 0 0 1 4.67 3c.18 0 .33.15.33.33V6.5a.5.5 0 0 0 1 0v-3Zm5 3A4.5 4.5 0 0 1 15.5 2c.28 0 .5.22.5.5v6.98l.02.22a625.58 625.58 0 0 1 .23 2.7c.12 1.5.25 3.16.25 3.6a2 2 0 1 1-4 0c0-.44.13-2.1.25-3.6l.17-2.04.03-.36h-.45A1.5 1.5 0 0 1 11 8.5v-2Zm3 3.04-.02.25a1240.9 1240.9 0 0 0-.23 2.69A86.58 86.58 0 0 0 13.5 16a1 1 0 1 0 2 0c0-.39-.12-1.98-.25-3.52a565.06 565.06 0 0 0-.23-2.7L15 9.55a.5.5 0 0 1 0-.04V3.04c-1.7.24-3 1.7-3 3.46v2c0 .28.22.5.5.5h1a.5.5 0 0 1 .5.54Z";
   var pathdfilled = "M4.5 2a.52.52 0 0 0-.18.04.5.5 0 0 0-.31.38C3.99 2.52 3.5 5.6 3.5 7a3 3 0 0 0 1.13 2.35c.25.2.37.41.37.6v.5a318.17 318.17 0 0 0 3 0v-.5c0-.19.12-.4.37-.6A3 3 0 0 0 9.5 7c0-1.4-.5-4.5-.5-4.58a.5.5 0 0 0-.36-.4C8.58 2 8.52 2 8.5 2h-.02a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-.99.03V2.5a.5.5 0 0 0-1 0v4a.5.5 0 1 1-.99 0v-4a.5.5 0 0 0-.5-.5ZM11 6.5A4.5 4.5 0 0 1 15.5 2c.28 0 .5.22.5.5v6.98l.02.22a625.58 625.58 0 0 1 .23 2.7c.12 1.5.25 3.16.25 3.6a2 2 0 1 1-4 0c0-.44.13-2.1.25-3.6l.17-2.04.03-.36h-.45A1.5 1.5 0 0 1 11 8.5v-2ZM8.5 2Z";
   
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